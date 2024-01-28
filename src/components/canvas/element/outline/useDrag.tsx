import { useCallback, useEffect, useRef, useState, FC, MutableRefObject} from 'react';

const useDrag: FC<{
	increase_direction: string,
	dragEndSetValue: Function,
	value: number,
	identifier: string,
	value_offset?: number,
	cursor?: string,
}> = ({
    increase_direction,
    dragEndSetValue,
    value,
    identifier,
    value_offset = 1,
    cursor = 'default',
}) => {
    const [dragState, setDragState] = useState({ isDragging: false, x: 0, y: 0 });
    const is_drag_updated_value: MutableRefObject<null | number> = useRef(null);
    const is_drag_for_inline_value_change_status: MutableRefObject<null | boolean> = useRef(null);

    const handleMouseDown = useCallback((event: MouseEvent) => {
        const { screenX, screenY } = event;
        setDragState({ isDragging: true, x: screenX, y: screenY });
        is_drag_for_inline_value_change_status.current = true;
        window.document.body.classList.add(`style-cursor-${cursor}`);
        is_drag_updated_value.current = value;
    }, []);

    const handleMouseMove = useCallback(
            (e: MouseEvent) => {
                e.stopPropagation();
                const { screenX, screenY } = e;
				const initialValue =( (typeof value === 'string'  && value === 'auto') || !value )? 0 : value;
                if (is_drag_for_inline_value_change_status.current) {

					let newValue:number = initialValue;

                    if (increase_direction === 'bottom-to-top') {
                        // top
                        newValue += parseInt((dragState.y - screenY) / value_offset);
                    } else if (increase_direction === 'top-to-bottom') {
                        // bottom
                        newValue += parseInt((screenY - dragState.y) / value_offset);
                    } else if (increase_direction === 'right-to-left') {
                        // left
                        newValue += parseInt((dragState.x - screenX) / value_offset);
                    } else if (increase_direction === 'left-to-right') {
                        // right
                        newValue += parseInt((screenX - dragState.x) / value_offset);
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
