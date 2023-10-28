
import React, { FC } from 'react';
import { useDrag } from 'react-dnd';
import { deepcopy } from '../../utils';
import { DRAGTYPES } from '../../configs/constants';
import { addShape } from '../../features/elements'
import { addBackdrop } from '../../features/design'
import { useAppDispatch } from "../../store/hooks"
import { SHAPES } from "../../shapes";

const DockerItem: FC<{
	key: React.Key,
	shape?: string,
	backdrop?: string,
	itemType: string,
	isBackdrop?: boolean,
}> = (props) => {
	const {
		shape,
		backdrop,
		isBackdrop
	} = props;

	const dispatcher = useAppDispatch();

	const [_, drag] = useDrag({
		type: DRAGTYPES.ADD_ELEMENT,
		item: {
			...(props.shape && {
				type: 'shape',
				name: shape
			}),
			...(isBackdrop && { backdrop })
		},
		collect: (monitor: any) => ({
			isDragging: monitor.isDragging()
		}),
		end: (item: any, monitor: any) => {
			const dropResult = monitor.getDropResult();
			if (dropResult) {
				let modifiedElement = deepcopy(item);
				modifiedElement.domNode = true;
				modifiedElement.attributes = {
					...item.attributes,
					position: dropResult.position
				}

				if (isBackdrop) {
					dispatcher(addBackdrop(item))
				} else {
					dispatcher(addShape(item))
				}
			}
		},
	});

	if (props.isBackdrop) {
		return (
			<div className="backdrop-list-item" ref={drag}>
				<img src={props.backdrop} />
			</div>
		)
	}

	if (typeof shape !== 'undefined') {
		return (
			<div className="element-list-item" ref={drag}>
				{
					SHAPES[shape].svg
				}
			</div>
		);
	}

}



export default DockerItem;
