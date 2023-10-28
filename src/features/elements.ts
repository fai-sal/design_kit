import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Initial State of elements
 */
import { Element } from "../types"

const initialState:Element[] = [];


export const elementSlice = createSlice({
	name: 'elements',
	initialState,
	reducers: {
		addShape: (state, action: PayloadAction<Element>) => {
			state.push(action.payload);
		},
	}
})

export default elementSlice.reducer;
export const { addShape } = elementSlice.actions;
