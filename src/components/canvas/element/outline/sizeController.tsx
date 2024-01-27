/**
 * External dependencies.
 */
import { FC } from 'react';
import useDrag from './useDrag';
import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { updateSize } from "../../../../features/elements";

const SizeController: FC<{
	id: string;
}> = ({ id }) => {	

	const selectedElement = useAppSelector((state) => state.canvas.elements[id]);
	const dispatcher = useAppDispatch();

	// console.log({selectedElement})
	const {width, height} = selectedElement.attributes.size;

	const setValue = (v, identifier, direction) => {
        // console.log(v, identifier, direction);
    }

	const dragEndSetValue = (v, identifier, direction) => {
        // v = v < 0 ? 0 : v;]
        console.log('drag end : ', v, identifier, direction);
		dispatcher(updateSize(
			{
				size : {
					[identifier]: v,
				},
				id,
			}
		));
        // dispather({ type: 'RESIZE_ELEMENT', payload: { id: elementId, attributes: { type: identifier, value: v, direction } } });
    };

	const [handleMouseDownWidthLeft] = useDrag({
        increase_direction: 'right-to-left',
        value: width,
        setValue: setValue,
        dragEndSetValue: dragEndSetValue,
        identifier: 'width',
        value_offset: 1,
        cursor: 'ew-resize',
    });
    const [handleMouseDownWidthRight] = useDrag({
        increase_direction: 'left-to-right',
        value: width,
        setValue: setValue,
        dragEndSetValue: dragEndSetValue,
        identifier: 'width',
        value_offset: 1,
        cursor: 'ew-resize',
    });
    const [handleMouseDownHeightTop] = useDrag({
        increase_direction: 'bottom-to-top',
        value: height,
        setValue: setValue,
        dragEndSetValue: dragEndSetValue,
        identifier: 'height',
        value_offset: 1,
        cursor: 'ns-resize',
    });
    const [handleMouseDownHeightBottom] = useDrag({
        increase_direction: 'top-to-bottom',
        value: height,
        setValue: setValue,
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
