import { useCallback, useEffect, useRef, useState } from 'react';

const useDrag = ({
    increase_direction,
    dragEndSetValue,
    value,
    identifier,
    value_offset = 1,
    cursor = 'default',
}) => {
    const [dragState, setDragState] = useState({ isDragging: false, x: 0, y: 0, });
    const is_drag_updated_value = useRef(null);
    const is_drag_for_inline_value_change_status = useRef(null);

    const handleMouseDown = useCallback((event) => {
        const { screenX, screenY } = event;
        setDragState({ isDragging: true, x: screenX, y: screenY });
        is_drag_for_inline_value_change_status.current = true;
        window.document.body.classList.add(`style-cursor-${cursor}`);
        is_drag_updated_value.current = value;
    }, []);

    const handleMouseMove = useCallback(
            (e) => {
                e.stopPropagation();
                const { screenX, screenY } = e;
				const initialValue =( (typeof value === 'string'  && value === 'auto') || !value )? 0 : value;
                if (is_drag_for_inline_value_change_status.current) {

					let newValue = parseInt(String(initialValue));

                    if (increase_direction === 'towards_top') {
                        // top
                        newValue += (dragState.y - screenY) / value_offset;
                    } else if (increase_direction === 'towards_bottom') {
                        // bottom
                        newValue += (screenY - dragState.y) / value_offset;
                    } else if (increase_direction === 'towards_left') {
                        // left
                        newValue += (dragState.x - screenX) / value_offset;
                    } else if (increase_direction === 'towards_right') {
                        // right
                        newValue += (screenX - dragState.x) / value_offset;
                    }

                    setDragState({ ...dragState, x: screenX, y: screenY, newValue });
                    is_drag_updated_value.current = newValue;
                }
				if (dragEndSetValue) {
					dragEndSetValue(initialValue, is_drag_updated_value.current, identifier, increase_direction);
				}
            },
        [dragState.isDragging],
    );

    const handleMouseUp = useCallback(() => {
        setDragState({ isDragging: false, x: 0, y: 0 });
        is_drag_for_inline_value_change_status.current = false;
    }, []);

    const removeCursorStyle = () => {
        window.document.body.classList.remove(`style-cursor-${cursor}`);
    };

    useEffect(() => {
        if (is_drag_for_inline_value_change_status.current) {
            document.getElementById("toolkit-editor")?.addEventListener('mousemove', handleMouseMove);
            document.getElementById("toolkit-editor")?.addEventListener('mouseup', handleMouseUp);
        } else {
            removeCursorStyle();
        }
        return () => {
            document.getElementById("toolkit-editor")?.removeEventListener('mousemove', handleMouseMove);
            document.getElementById("toolkit-editor")?.removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp, dragState.isDragging]);

    return [handleMouseDown];
}

export default useDrag;
