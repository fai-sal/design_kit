import { useState, useRef, FC } from "react";
// import { findDOMNode } from "react-dom";
import { useDrop, DropTargetMonitor } from 'react-dnd';
import classNames from "classnames";
// import WithDnD from './withDnD';
import { DRAGTYPES } from "../../configs/constants";
import Element from "./element"
import {
	dropHandler,
} from "../../utils";
import { useAppSelector } from "../../store/hooks"
import Loader from "../design-loader";
import { ElementInterface } from "../../types"


const Canvas: FC = () => {
	const canvasWrapper = useRef(null);
	const elements = useAppSelector((state) => state.canvas.elements)
	const design = useAppSelector((state) => state.canvas.design)
	const [isLoading] = useState(false);

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

	let style: any = {};

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
				{isLoading ? (
					<Loader />
				) :
					<>
						{
							elements.map((element) => {
								return (
									<Element data={element} key={element.id} />
								)
							})
						}
						{/* {
							elements.map((element, index) => {
								return (
									<WithDnD key={index} id={Math.random()*100} position={element.attributes.position} size={element.attributes.size} setAttributes={setAttributes}>
										<Item data={element} />
									</WithDnD>
								)
							})
						} */}
					</>
				}
			</div>
		</div>
	);
};
export default Canvas;
