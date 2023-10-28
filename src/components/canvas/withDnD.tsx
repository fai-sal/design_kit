import { useDrag } from 'react-dnd';
import { FC } from 'react';
import { DRAGTYPES } from '../../configs/constants';

const style = {
	position: 'absolute',
};

const WithDnD: FC = ({ id, position = {}, size = {}, children, setAttributes }) => {

	const [{ isDragging }, drag] = useDrag(() => ({
		type: DRAGTYPES.MOVE_ELEMENT,
		item: { dragType: DRAGTYPES.MOVE_ELEMENT, id, ...position },
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
		end: (item, monitor) => {
			const { id, dragType } = item;
			const dropResult = monitor.getDropResult();
			if (dropResult && dragType === DRAGTYPES.MOVE_ELEMENT) {
				setAttributes({ id, attributes: { position: dropResult.newPosition } })
			}

		}
	}), [id, position, size]);

	return (
		<div ref={drag} style={{ ...style, ...position, ...size }} >
			{children}
		</div>
	);
};

export default WithDnD;
