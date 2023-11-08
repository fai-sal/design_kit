import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
	name: string;
	selectedItem: string;
} = {
	name: 'Design Name',
	selectedItem: '',
};

/**
 * Handles meta info, eg: name
 */
export const metaSlice = createSlice({
	name: 'meta',
	initialState,
	reducers: {
		updateName: (state, action: PayloadAction<string>) => {
			state.name = action.payload;
		},
		updateSelectedId: (state, action: PayloadAction<string>) => {
			state.selectedItem = action.payload;
		},
	}
})

export default metaSlice.reducer;
export const { updateName, updateSelectedId } = metaSlice.actions;
