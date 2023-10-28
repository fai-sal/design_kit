import { DRAGTYPES } from "../configs/constants";
export function deepcopy<T extends object>(item:T):T {
	return JSON.parse(JSON.stringify(item));
}


export const getOffset = (el) => {
    var _x = 0;
    var _y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return {
        top: _y,
        left: _x
    };
}


export function dropHandler(item, monitor) {
    const hasDroppedOnChild = monitor.didDrop();
    if (hasDroppedOnChild) {
        return;
    }
    if (item.dragType === DRAGTYPES.MOVE_ELEMENT) {
        const delta = monitor.getDifferenceFromInitialOffset();
        const left = Math.round(item.left + delta.x);
        const top = Math.round(item.top + delta.y);
        return ({ item, monitor, newPosition: { left, top } });
    } else if (item.dragType === DRAGTYPES.ADD_ELEMENT) {
        const clientOffset = monitor.getClientOffset();
        const canvasOffset = getOffset(document.getElementById('toolkit-editor'));
        return ({ item, monitor, position: { left: clientOffset.x - canvasOffset.left, top: clientOffset.y - canvasOffset.top } });
    } else if (item.dragType === 'ADD_BACKDROP') {
        return ({ item, monitor, backdrop: true });
    }
}
