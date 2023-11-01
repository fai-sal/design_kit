import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Backdrop ={
	backdrop: string
}
const initialState: Backdrop = {
	backdrop: '',
};

/**
 * Handles canvas related properties - background
 */
export const designSlice = createSlice({
	name: 'design',
	initialState,
	reducers: {
		addBackdrop: (state, action: PayloadAction<Backdrop>) => {
			state.backdrop = action.payload.backdrop;
		},
	}
})

export default designSlice.reducer;
export const { addBackdrop } = designSlice.actions;
