import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/**
 * Initial State of elements
 */
import { ElementInterface } from "../types"

const initialState:ElementInterface[] = [];


export const elementSlice = createSlice({
	name: 'elements',
	initialState,
	reducers: {
		addShape: (state, action: PayloadAction<ElementInterface>) => {
			state.push(action.payload);
		},
	}
})

export default elementSlice.reducer;
export const { addShape } = elementSlice.actions;
