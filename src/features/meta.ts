import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: {
	name: string,
} = {
	name: 'Design Name',
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
	}
})

export default metaSlice.reducer;
export const { updateName } = metaSlice.actions;
