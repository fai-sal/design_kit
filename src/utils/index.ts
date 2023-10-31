import { DRAGTYPES } from "../configs/constants";
import { DropTargetMonitor } from "react-dnd";
import { ElementInterface } from "../types"

/**
 * Deep copies object.
 * 
 * @param {object} item object to be copied.
 * @returns {object} Object.
 */
export function deepcopy<T extends object>(item: T): T {
	return JSON.parse(JSON.stringify(item));
}


export const getOffset = (element: HTMLElement | null) => {
	let X = 0;
	let Y = 0;

	while (!!element && !isNaN(element.offsetLeft) && !isNaN(element.offsetTop)) {
		X += element.offsetLeft - element.scrollLeft;
		Y += element.offsetTop - element.scrollTop;
		element = element.offsetParent as HTMLElement;
	}
	return { Y, X };
}


/**
 * Custom drop handler with position calculation.
 * 
 * @param {ElementInterface} item 
 * @param {DropTargetMonitor} monitor 
 * 
 * @returns 
 */
export function dropHandler(item: ElementInterface, monitor: DropTargetMonitor) {

	if (item.type === DRAGTYPES.MOVE_ELEMENT) {
		const delta: {
			x: number,
			y: number
		} | null = monitor.getDifferenceFromInitialOffset();

		delete item.type;

		if (delta === null) {
			return {
				item,
				monitor,
			}
		}
		return (
			{
				item,
				monitor,
				newPosition: {
					X: Math.round(item.attributes.position.X + delta.x ? 0 : 0),
					Y: Math.round(item.attributes.position.Y + delta.y)
				}
			}
		);

	} else if (item.type === DRAGTYPES.ADD_ELEMENT) {
		const clientOffset = monitor.getClientOffset();
		const canvas = <HTMLElement>document.getElementById('toolkit-editor')
		const canvasOffset = getOffset(canvas);
		delete item.type;
		return (
			{
				item,
				monitor,
				position: {
					X: clientOffset?.x ? clientOffset.x - canvasOffset.X : 0,
					Y: clientOffset?.y ? clientOffset.y - canvasOffset.Y : 0
				}
			}
		);
	}
}

/**
 * Generate Unique id of each element.
 * @returns String.
 */
export const getUniqueId = () => Date.now().toString(36) + Math.random().toString(36).substring(2)
