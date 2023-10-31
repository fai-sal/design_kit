import React, { FC } from "react";
import { useDrag, DragSourceMonitor } from "react-dnd";
import { deepcopy } from "../../utils";
import { DRAGTYPES } from "../../configs/constants";
import { addShape } from "../../features/elements";
import { addBackdrop } from "../../features/design";
import { useAppDispatch } from "../../store/hooks";
import { SHAPES } from "../../elements/shapes";
import { getUniqueId } from "../../utils";
import { ElementInterface } from "../../types";

interface Backdrop {
	category: string;
	backdrop: string;
}
interface DropResult {
	item: ElementInterface;
	monitor: DragSourceMonitor;
	position: {
		X: number;
		Y: number;
	};
}

const DockerItem: FC<{
	key: React.Key;
	shape?: string;
	backdrop?: string;
	itemType: string;
	isBackdrop?: boolean;
}> = (props) => {
	const { shape = "", backdrop, isBackdrop } = props;

	const dispatcher = useAppDispatch();

	const [_, drag] = useDrag({
		type: DRAGTYPES.ADD_ELEMENT,
		item: {
			type: DRAGTYPES.ADD_ELEMENT,
			...(props.shape && {
				category: "shape",
				name: shape,
				attributes: {
					size: SHAPES[shape as keyof typeof SHAPES].size
				}
			}),
			...(isBackdrop && {
				backdrop,
				category: "canvas",
			}),
		},
		collect: (monitor: DragSourceMonitor) => ({
			isDragging: monitor.isDragging(),
		}),
		end: (item: any, monitor: DragSourceMonitor) => {
			const dropResult: DropResult | null = monitor.getDropResult();

			if (isBackdrop) {
				const newItem: Backdrop = deepcopy(item);
				dispatcher(addBackdrop(newItem));
			}

			if (dropResult && !backdrop) {
				const newItem: ElementInterface = deepcopy(item);
				newItem.id = getUniqueId();
				newItem.attributes = {
					...item.attributes,
					position: dropResult.position,
				};
				dispatcher(addShape(newItem));
			}
		},
	});

	return (
		<div className="element-list-item" ref={drag}>
			{isBackdrop ? (
				<img src={props.backdrop} />
			) : (
				SHAPES[shape as keyof typeof SHAPES].svg
			)}
		</div>
	);
};

export default DockerItem;
