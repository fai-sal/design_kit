import { useCallback, useEffect, useRef, useState, MutableRefObject, MouseEvent} from 'react';

interface DragProps {
	increase_direction: string;
	dragEndSetValue: (initialValue: number, v: number, identifier: string, direction: string) => void;
	value: number | string;
	identifier: string;
	value_offset?: number;
	cursor?: string;
}

const useDrag = ( props: DragProps) => {
	const {
		value,
		cursor = 'default',
	} = props;

    const [dragState, setDragState] = useState<{
		isDragging: boolean;
		x: number;
		y: number;
		newValue?: number;
	}>({ isDragging: false, x: 0, y: 0 });
    const is_drag_updated_value: MutableRefObject<string | number> = useRef('');
    const is_drag_for_inline_value_change_status: MutableRefObject<null | boolean> = useRef(null);

    const handleMouseDown = useCallback((event: MouseEvent<HTMLSpanElement>) => {
        const { screenX, screenY } = event;
        setDragState({ isDragging: true, x: screenX, y: screenY });
        is_drag_for_inline_value_change_status.current = true;
        window.document.body.classList.add(`style-cursor-${cursor}`);
        is_drag_updated_value.current = value;
    }, []);

    const handleMouseUp = useCallback(() => {
        setDragState({ isDragging: false, x: 0, y: 0 });
        is_drag_for_inline_value_change_status.current = false;
    }, []);

    const removeCursorStyle = () => {
        window.document.body.classList.remove(`style-cursor-${cursor}`);
    };

    useEffect(() => {
        if (is_drag_for_inline_value_change_status.current) {
            document.getElementById("toolkit-editor")?.addEventListener('mouseup', handleMouseUp);
        } else {
            removeCursorStyle();
        }
        return () => {
            document.getElementById("toolkit-editor")?.removeEventListener('mouseup', handleMouseUp);
        };
    }, [ handleMouseUp, dragState.isDragging]);

    return [handleMouseDown] as const;
}

export default useDrag;
