/**
 * External dependencies
 */
import classNames from "classnames";
import { useRef, FC, CSSProperties, MutableRefObject } from "react";
import { useDrop, DropTargetMonitor } from 'react-dnd';

/**
 * Internal dependencies
 */
import Element from "./element"
import { dropHandler } from "../../utils";
import { ElementInterface } from "../../types";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { DRAGTYPES } from "../../configs/constants";
import { updateSelectedId } from "../../features/meta";

const Canvas: FC = () => {
	const dispatcher = useAppDispatch();
	const canvasWrapper: MutableRefObject<HTMLDivElement | null> = useRef(null);
	const elements = useAppSelector((state) => state.canvas.elements);
	const design = useAppSelector((state) => state.canvas.design);

	const [, drop] = useDrop(() => ({
		accept: [DRAGTYPES.ADD_ELEMENT, DRAGTYPES.MOVE_ELEMENT, "ADD_BACKDROP"],
		collect: (monitor) => ({
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop(),
		}),
		drop: (item: ElementInterface, monitor: DropTargetMonitor) => {
			if (item.type !== undefined) {
				return dropHandler(item, monitor);
			}
		},
	}));

	const style: CSSProperties = {}

	if (design.backdrop) {
		style.backgroundImage = `url(${design.backdrop})`;
	}

	const editoClasses = classNames(
		"toolkit-editor",
		"is-draging-border",
		{ "has-backdrop": !!design.backdrop }
	)

	// handle Canvas click
	const handleEditorClick = ( event: React.MouseEvent<HTMLDivElement> ) => {
		event.preventDefault();
		event.stopPropagation();
		dispatcher(updateSelectedId('canvas'));
	}

	return (
		<div className="content-body" ref={canvasWrapper}>
			<div ref={drop} onClick={handleEditorClick} className={editoClasses} id="toolkit-editor" style={style}>
				{
					Object.keys(elements).map((key) => <Element data={elements[key]} key={elements[key].id} />)
				}
			</div>
		</div>
	);
};
export default Canvas;
