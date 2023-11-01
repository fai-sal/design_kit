/**
 * External dependencies
 */
import { FC, useState } from "react";
import classNames from "classnames"

/**
 * Internal dependencies
 */
import Docker from './docker';
import Canvas from "./canvas";
import CanvasHeader from "./canvas-header";

const Builder: FC = () => {
	const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

	const toggleSidebar = () => {
		setIsCollapsed((oldState) => !oldState);
	}
	return (
		<div className={classNames('drag-drop-container', { 'menu-collapse': isCollapsed })}>
			<Docker
				toggleSidebar={toggleSidebar}
				isCollapsed={isCollapsed}
			/>
			<div className="designer-toolkit-content">
				<CanvasHeader />
				<Canvas />
			</div>
		</div>
	)
}

export default Builder;
