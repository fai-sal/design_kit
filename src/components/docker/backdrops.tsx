import { FC } from "react";
import classNames from "classnames";
import DockerItem from './docker-item'

const BACKDROPS = [
	'./backdrops/backdrops-template-1.jpg',
	'./backdrops/backdrops-template-2.jpg',
	'./backdrops/backdrops-template-3.jpg',
	'./backdrops/backdrops-template-4.jpg',
]
const Backdrops: FC<{
	isActive: boolean
}> = ({ isActive }) => {

	return (
		<div className={classNames('backdrops', { 'active': isActive })}>
			<div className="menu-item-top">
				<h4>Backdrops</h4>
			</div>
			<div className="backdrop-list">
				{
					BACKDROPS.map((backdrop, index) => {
						return (
							<DockerItem key={index} backdrop={backdrop} isBackdrop itemType="backdrop"/>
						)
					})
				}
				</div>
		</div>
	)
}

export default Backdrops;
