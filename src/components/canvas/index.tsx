/**
 * External dependencies
 */
import classNames from "classnames";
import { useRef, FC } from "react";
import { useDrop, DropTargetMonitor } from 'react-dnd';

/**
 * Internal dependencies
 */
import Element from "./element"
import { dropHandler } from "../../utils";
import { ElementInterface } from "../../types"
import { useAppSelector } from "../../store/hooks"
import { DRAGTYPES } from "../../configs/constants";

const Canvas: FC = () => {
	const canvasWrapper = useRef(null);
	const elements = useAppSelector((state) => state.canvas.elements)
	const design = useAppSelector((state) => state.canvas.design)

	const [_, drop] = useDrop(() => ({
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

	const style: { [key: string]: string } = {};

	if (design.backdrop) {
		style.backgroundImage = `url(${design.backdrop})`;
	}

	const editoClasses = classNames(
		"toolkit-editor",
		"is-draging-border",
		{ "has-backdrop": !!design.backdrop }
	)

	return (
		<div className="content-body" ref={canvasWrapper}>
			<div ref={drop} className={editoClasses} id="toolkit-editor" style={style}>
				{
					Object.keys(elements).map((key) => <Element data={elements[key]} key={elements[key].id} />)
				}
			</div>
		</div>
	);
};
export default Canvas;
