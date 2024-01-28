/**
 * External dependencies.
 */
import { FC } from 'react';
import useDrag from "./useDrag";
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { updateSize, moveShape } from "../../../../features/elements";

const SizeController: FC<{
	id: string;
}> = ({ id }) => {	

	const selectedElement = useAppSelector((state) => state.canvas.elements[id]);
	const dispatcher = useAppDispatch();

	const {width, height} = selectedElement.attributes.size;

	const dragEndSetValue = (initialValue: number, v: number, identifier: string, direction: string) : void => {

		dispatcher(updateSize(
			{
				id,
				size : {
					...selectedElement.attributes.size,
					[identifier]: v,
				},
			}
		));

		if( direction === "towards_top") {
			dispatcher(moveShape(
				{
					id,
					position: {
						...selectedElement.attributes.position,
						Y: selectedElement.attributes.position.Y + (initialValue - v),
					}
				}
			));
		}

		if( direction === "towards_left") {
			dispatcher(moveShape(
				{
					id,
					position: {
						...selectedElement.attributes.position,
						X: selectedElement.attributes.position.X + (initialValue - v),
					}
				}
			));
		}

    };

	const [onDragLeft] = useDrag({
        increase_direction: 'towards_left',
        value: width,
        dragEndSetValue: dragEndSetValue,
        identifier: 'width',
        value_offset: 1,
        cursor: 'ew-resize',
    });

    const [onDragRight] = useDrag({
        increase_direction: 'towards_right',
        value: width,
        dragEndSetValue: dragEndSetValue,
        identifier: 'width',
        value_offset: 1,
        cursor: 'ew-resize',
    });

    const [onDragTop] = useDrag({
        increase_direction: 'towards_top',
        value: height,
        dragEndSetValue: dragEndSetValue,
        identifier: 'height',
        value_offset: 1,
        cursor: 'ns-resize',
    });

    const [onDragBottom] = useDrag({
        increase_direction: 'towards_bottom',
        value: height,
        dragEndSetValue: dragEndSetValue,
        identifier: 'height',
        value_offset: 1,
        cursor: 'ns-resize',
    });

	const onResize = (event: React.MouseEvent<HTMLSpanElement>) => {
		event.preventDefault();
		event.stopPropagation();

		if(event.currentTarget.classList.contains("right")) {
			onDragRight(event);
		}else if(event.currentTarget.classList.contains("bottom")) {
			onDragBottom(event);
		}else if(event.currentTarget.classList.contains("left")) {
			onDragLeft(event);
		}else {
			onDragTop(event);
		}
		
	}

	return (
		<div className="size-control-wrapper">
			<span className="size-control right" onMouseDown={onResize} />
			<span className="size-control left" onMouseDown={onResize} />
			<span className="size-control top" onMouseDown={onResize} />
			<span className="size-control bottom" onMouseDown={onResize} />

			<span className="size-control corner left-top"></span>
			<span className="size-control corner right-top"></span>
			<span className="size-control corner left-bottom"></span>
			<span className="size-control corner right-bottom"></span>
		</div>
)

};

export default SizeController;
