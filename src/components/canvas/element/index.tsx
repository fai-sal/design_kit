/**
 * External dependencies
 */
import { FC, useMemo } from "react"
import { useDrag, DragSourceMonitor } from "react-dnd";

/**
 * Internal dependencies
 */
import { SHAPES } from "../../../elements/shapes";
import { ElementInterface } from "../../../types";
import { useAppDispatch } from "../../../store/hooks";
import { DRAGTYPES } from "../../../configs/constants";
import { moveShape } from "../../../features/elements";

interface DropResult {
	item: ElementInterface;
	monitor: DragSourceMonitor;
	position: {
		X: number;
		Y: number;
	};
}

const Element: FC<{
	data: ElementInterface
}> = ({ data }) => {

	const generateStyle = () => {
		return {
			transform: `translate(${data.attributes.position.X}px, ${data.attributes.position.Y}px)`,
			width: data.attributes.size.width,
			height: data.attributes.size.height,
		}
	}
	const style = useMemo(() => generateStyle(), [data.attributes]);

	const dispatcher = useAppDispatch();

	const [_, drag] = useDrag({
		type: DRAGTYPES.ADD_ELEMENT,
		item: {
			type: DRAGTYPES.ADD_ELEMENT,
			category: "shape",
			name: data.name,
			id: data.id,
			attributes: {
				size: SHAPES[data.name as keyof typeof SHAPES].size
			}
		},
		collect: (monitor: DragSourceMonitor) => ({
			isDragging: monitor.isDragging(),
		}),
		end: (item: any, monitor: DragSourceMonitor) => {
			const dropResult: DropResult | null = monitor.getDropResult();
			if (dropResult) {
				dispatcher(moveShape(
					{
						id: item.id,
						position: dropResult.position
					}
				));
			}
		},
	});

	return (
		<div className="element" style={style} ref={drag}>
			{SHAPES[data.name as keyof typeof SHAPES].svg}
		</div>
	)
}


export default Element;
