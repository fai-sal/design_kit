/**
 * External dependencies
 */
import { FC } from "react"
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import DockerItem from './docker-item'
import shapeNames from "../../elements/shapes";

const Shapes: FC<{
	isActive: boolean
}> = ({ isActive }) => {
	return (
		<div className={classnames('elements', { 'active': isActive })}>
			<div className="menu-item-top">
				<h4>Shapes</h4>
			</div>
			<div className="elements-list menu-item-common">
				{shapeNames.map((shapeName) => <DockerItem key={shapeName} shape={shapeName} itemType="shape"/>)}
			</div>
		</div>
	)

}

export default Shapes;
