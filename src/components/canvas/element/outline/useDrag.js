import throttle from 'lodash.throttle';
import { useCallback, useEffect, useRef, useState } from 'react';

const useDrag = ({
    increase_direction,
    dragEndSetValue,
    value,
    setValue,
    identifier,
    value_offset = 1,
    cursor = 'default',
}) => {
    const [dragState, setDragState] = useState({ isDragging: false, x: 0, y: 0 });
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
                if (is_drag_for_inline_value_change_status.current) {
                    let v = parseInt(value === 'auto' || !value ? 0 : value);
                    if (increase_direction === 'bottom-to-top') {
                        // top
                        v += parseInt((dragState.y - screenY) / value_offset);
                    } else if (increase_direction === 'top-to-bottom') {
                        // bottom
                        v += parseInt((screenY - dragState.y) / value_offset);
                    } else if (increase_direction === 'right-to-left') {
                        // left
                        v += parseInt((dragState.x - screenX) / value_offset);
                    } else if (increase_direction === 'left-to-right') {
                        // right
                        v += parseInt((screenX - dragState.x) / value_offset);
                    }

                    setDragState({ ...dragState, x: screenX, y: screenY, v });
                    setValue(v, identifier, increase_direction);
                    is_drag_updated_value.current = v;
                }
            },
        [dragState.isDragging],
    );
    // const handleMouseMove = useCallback(
    //     throttle(
    //         (e) => {
    //             e.stopPropagation();
    //             const { screenX, screenY } = e;
    //             if (is_drag_for_inline_value_change_status.current) {
    //                 let v = parseInt(value === 'auto' || !value ? 0 : value);
    //                 if (increase_direction === 'bottom-to-top') {
    //                     // top
    //                     v += parseInt((dragState.y - screenY) / value_offset);
    //                 } else if (increase_direction === 'top-to-bottom') {
    //                     // bottom
    //                     v += parseInt((screenY - dragState.y) / value_offset);
    //                 } else if (increase_direction === 'right-to-left') {
    //                     // left
    //                     v += parseInt((dragState.x - screenX) / value_offset);
    //                 } else if (increase_direction === 'left-to-right') {
    //                     // right
    //                     v += parseInt((screenX - dragState.x) / value_offset);
    //                 }

    //                 setDragState({ ...dragState, x: screenX, y: screenY, v });
    //                 setValue(v, identifier, increase_direction);
    //                 is_drag_updated_value.current = v;
    //             }
    //         },
    //         [10],
    //     ),
    //     [dragState.isDragging],
    // );

    const handleMouseUp = useCallback(() => {
        if (dragEndSetValue) {
            dragEndSetValue(is_drag_updated_value.current, identifier, increase_direction);
        }
        setDragState({ isDragging: false, x: 0, y: 0 });
        is_drag_for_inline_value_change_status.current = false;
    }, [dragState.isDragging]);

    const removeCursorStyle = () => {
        window.document.body.classList.remove(`style-cursor-${cursor}`);
    };

    useEffect(() => {
        if (is_drag_for_inline_value_change_status.current) {
            document.getElementById("toolkit-editor").addEventListener('mousemove', handleMouseMove);
            document.getElementById("toolkit-editor").addEventListener('mouseup', handleMouseUp);
        } else {
            removeCursorStyle();
        }
        return () => {
            document.getElementById("toolkit-editor").removeEventListener('mousemove', handleMouseMove);
            document.getElementById("toolkit-editor").removeEventListener('mouseup', handleMouseUp);
        };
    }, [handleMouseMove, handleMouseUp, dragState.isDragging]);

    return [handleMouseDown];
}

export default useDrag;
