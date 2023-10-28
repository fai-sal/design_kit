import React from "react"

export interface Element {
	name: string,
	title: string,
	icon: string
	category: string,
	attributes: object,
	Component: string
}

export interface Design {
	name: string,
	elements: Element[]
}

export interface ElementCard {
	name: string,
	title: string,
	category: string,
	attributes: object,
    Component: React.JSX,
    icon: React.JSX,
}
