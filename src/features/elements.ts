import { createSlice, PayloadAction } from "@reduxjs/toolkit";
/**
 * Initial State of elements
 */
import { ElementInterface, Position } from "../types"

type MovedItem = {
	position: Position,
	id: string
}
const initialState: {
	[key: string]: ElementInterface
} = {};

/**
 * Handles adding/moving elements - shape
 */
export const elementSlice = createSlice({
	name: 'elements',
	initialState,
	reducers: {
		addShape: (state, action: PayloadAction<ElementInterface>) => {
			state[action.payload.id] = action.payload
		},
		moveShape: (state, action: PayloadAction<MovedItem>) => {
			state[action.payload.id].attributes.position = action.payload.position;
		},
	}
})

export default elementSlice.reducer;
export const { addShape, moveShape } = elementSlice.actions;
