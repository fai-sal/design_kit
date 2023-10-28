import { FC, useState } from "react";
import classNames from "classnames"
/**
 * Internal dependencies
 */
import Docker from './docker';
import Canvas from "./canvas";
import Header from "./canvas-header";

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
				<Header />
				<Canvas />
			</div>
		</div>
	)
}

export default Builder;
