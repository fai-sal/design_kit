import { useState, useRef, FC } from "react";
import classnames from 'classnames';
import Shapes from './shapes';
import Backdrops from './backdrops';

const Docker: FC<
	{
		isCollapsed: boolean,
		toggleSidebar: () => void
	}> = (props) => {

		const {
			toggleSidebar,
			isCollapsed,
		} = props;

		const activeMenuIndicatorRef = useRef<HTMLSpanElement>(null);
		const topMenu = useRef<HTMLDivElement>(null);

		const [menuList, setMenuList] = useState({
			activeMenuItem: 'shapes',
			topMenulists: [
				{
					'name': 'Shapes',
					'id': 'shapes',
					'svg': <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path fill="#BAC0D2" d="M18.85 13.104a5.85 5.85 0 110 11.7 5.85 5.85 0 010-11.7zm-17.55.65h7.8c.67 0 1.226.514 1.293 1.168l.007.132v7.8c0 .67-.514 1.226-1.168 1.293l-.132.007H1.3c-.67 0-1.226-.514-1.293-1.168L0 22.854v-7.8c0-.67.514-1.226 1.168-1.293l.132-.007zM12.724.505l.081.119 4.823 7.904c.51.822-.041 1.883-.98 1.97l-.125.006H6.864c-.972 0-1.585-1.027-1.166-1.867l.061-.109L10.595.624a1.29 1.29 0 012.039-.225l.09.106z" /></svg>,
					'active': true
				},
				{
					'name': 'Backdrops',
					'id': 'backdrops',
					'svg': <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none"><path fill="#BAC0D2" d="M21.4 19.538c0-.486-.178-.955-.554-1.29L3.742 1.145a1.82 1.82 0 00-2.598 0 1.82 1.82 0 000 2.597l17.113 17.113a1.82 1.82 0 002.597 0c.362-.362.545-.82.545-1.317zM11.017.6H6.593L21.4 15.406v-4.424c0-.487-.177-.955-.553-1.29l-8.539-8.539C11.972.777 11.504.6 11.017.6zm8.556 0H15.15l6.25 6.25V2.425A1.83 1.83 0 0019.573.6zm-8.556 20.764h4.424L.635 6.558v4.424c0 .486.177.954.554 1.29l8.557 8.556.01.01c.33.288.776.526 1.261.526zm-8.558 0A1.83 1.83 0 01.635 19.54L.59 14.692l6.716 6.717-4.848-.045z" /></svg>,
					'active': false
				}
			]
		});


		const sidebarMenuActive = (menuId: string) => (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
			setMenuList({
				...menuList,
				activeMenuItem: menuId,
			});
			if (isCollapsed || menuList.activeMenuItem === menuId) {
				toggleSidebar()
			}
			if (activeMenuIndicatorRef.current === null) {
				return;
			}

			if ((event.target as HTMLElement).closest('.menu-top') !== null) {
				activeMenuIndicatorRef.current.style.display = 'block';
				activeMenuIndicatorRef.current.style.top = (event.target as HTMLElement).offsetTop + 'px';
			} else {
				activeMenuIndicatorRef.current.style.display = 'none';
				activeMenuIndicatorRef.current.style.top = -10 + 'px';
			}
		}


		return (
			<div className="sidebar">
				<div className="menu">
					<div ref={topMenu} className="menu-top">
						<ul>
							<span className="activeIndicator" ref={activeMenuIndicatorRef}>
								<span className="prevCurve"></span>
								<span className="nextCurve"></span>
							</span>
							{menuList.topMenulists.map((item) => {
								return (
									<li key={item.id}
										className={classnames({ 'active': menuList.activeMenuItem === item.id })}
										onClick={sidebarMenuActive(item.id)}
									>
										<a href="">
											{item.svg}
											<p>{item.name}</p>
										</a>
									</li>
								)
							})}
						</ul>
					</div>
				</div>

				<div className="menu-item">
					<Shapes isActive={menuList.activeMenuItem === 'shapes'} />
					<Backdrops isActive={menuList.activeMenuItem === 'backdrops'} />
				</div>

				<div className="sidebar-collapse" onClick={toggleSidebar}>
					<div className="sidebar-collapse-bg">
						<svg width="16" height="76" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6 6a6 6 0 01-6-6v75.85c0-2.72 1.81-5.018 4.293-5.754C10.785 69.941 16 64.63 16 58.1V18c0-6.611-5.346-11.974-11.951-12H6z" fill="#353843" /></svg>
					</div>
					<div className="sidebar-collapse-icon">
						<svg width="7" height="10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.638.156A.528.528 0 015.03 0a.546.546 0 01.376.156l.508.508a.6.6 0 01.176.39.68.68 0 01-.034.216.488.488 0 01-.112.176L2.382 5l3.556 3.554a.446.446 0 01.122.176.68.68 0 01.034.216.612.612 0 01-.176.39l-.508.508a.51.51 0 01-.176.116.566.566 0 01-.414 0 .528.528 0 01-.176-.116L.186 5.4A.47.47 0 010 5c0-.074.016-.147.048-.214a.578.578 0 01.138-.176L4.638.156z" fill="#BAC0D2" /></svg>
					</div>
				</div>

			</div>
		);
	};

export default Docker;
