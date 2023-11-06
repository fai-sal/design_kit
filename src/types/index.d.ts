
export type Position = {
	X: number;
	Y: number;
}
export interface ElementInterface {
	type?: string;
	name: string;
	category: string;
	attributes: {
		position: Position;
		size: {
			width: string;
			height: string;
		}
	},
	id: string;
}
export interface BackdropInterface {
	backdrop: string;
	category: string;
}

export interface Design {
	name: string;
	elements: Element[];
}

export interface ElementCard {
	name: string;
	title: string;
	category: string;
	attributes: object;
	Component: React.JSX;
	icon: React.JSX;
}
