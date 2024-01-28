/**
 * External dependencies
 */
import classNames from "classnames";
import { FC, useMemo } from "react"
import { useDrag, DragSourceMonitor } from "react-dnd";

/**
 * Internal dependencies
 */
import { SHAPES } from "../../../elements/shapes";
import Outline from "./outline";
import { ElementInterface } from "../../../types";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { DRAGTYPES } from "../../../configs/constants";
import { moveShape } from "../../../features/elements";
import { updateSelectedId } from "../../../features/meta";

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
			width: `${data.attributes.size.width}px`,
			height: `${data.attributes.size.height}px`,
		}
	}
	const style = useMemo(() => generateStyle(), [data.attributes]);

	const dispatcher = useAppDispatch();
	const ID = useAppSelector((state) => state.canvas.meta.selectedItem);
	// const selectedElement = useAppSelector((state) => state.canvas.elements[ID]);

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
		end: (item: ElementInterface, monitor: DragSourceMonitor) => {
			const dropResult: DropResult | null = monitor.getDropResult();
			if (dropResult) {
				dispatcher(moveShape(
					{
						id: item.id,
						position: dropResult.position
					}
				));
				dispatcher(updateSelectedId(item.id));
			}
		},
	});

	/**
	 * Select element on Click.
	 */
	const handleElmentClick = (event: React.MouseEvent<HTMLDivElement>) => {
		event.preventDefault();
		event.stopPropagation();
		dispatcher(updateSelectedId(data.id));
	}

	const classes = classNames( 'element', { 'is-selected' : data.id === ID})
	return (
		<div className={classes} style={style} ref={drag} onClick={handleElmentClick}>
			{SHAPES[data.name as keyof typeof SHAPES].svg}
			{ data.id === ID && <Outline id={ID} /> }
		</div>
	)
}


export default Element;
