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

	const dragEndSetValue = (initialValue: number, v: number, identifier: number, direction: string) : void => {

		dispatcher(updateSize(
			{
				id,
				size : {
					...selectedElement.attributes.size,
					[identifier]: v,
				},
			}
		));

		if( direction === "bottom-to-top") {
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

		if( direction === "right-to-left") {
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

	const [handleMouseDownWidthLeft] = useDrag({
        increase_direction: 'right-to-left',
        value: width,
        dragEndSetValue: dragEndSetValue,
        identifier: 'width',
        value_offset: 1,
        cursor: 'ew-resize',
    });

    const [handleMouseDownWidthRight] = useDrag({
        increase_direction: 'left-to-right',
        value: width,
        dragEndSetValue: dragEndSetValue,
        identifier: 'width',
        value_offset: 1,
        cursor: 'ew-resize',
    });

    const [handleMouseDownHeightTop] = useDrag({
        increase_direction: 'bottom-to-top',
        value: height,
        dragEndSetValue: dragEndSetValue,
        identifier: 'height',
        value_offset: 1,
        cursor: 'ns-resize',
    });

    const [handleMouseDownHeightBottom] = useDrag({
        increase_direction: 'top-to-bottom',
        value: height,
        dragEndSetValue: dragEndSetValue,
        identifier: 'height',
        value_offset: 1,
        cursor: 'ns-resize',
    });

	return (
		<div className="size-control-wrapper">
			<span className="size-control right" 
			onMouseDown={(event)=> {
				event.preventDefault();
				event.stopPropagation();
				handleMouseDownWidthRight(event);
			}
			}
				></span>
			<span className="size-control bottom" onMouseDown={(event)=>{
				event.preventDefault();
				event.stopPropagation();
				handleMouseDownHeightBottom(event)
			}}></span>
			<span className="size-control left" onMouseDown={(event)=>{
				event.preventDefault();
				event.stopPropagation();
				handleMouseDownWidthLeft(event)
			}}></span>
			<span className="size-control top" onMouseDown={(event)=>{
				event.preventDefault();
				event.stopPropagation();
				handleMouseDownHeightTop(event)
			}}></span>
			<span className="size-control corner left-top"></span>
			<span className="size-control corner right-top"></span>
			<span className="size-control corner left-bottom"></span>
			<span className="size-control corner right-bottom"></span>
		</div>
)

};

export default SizeController;
