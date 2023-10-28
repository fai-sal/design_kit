import { createSlice, PayloadAction } from "@reduxjs/toolkit";
const initialState: {
	backdrop: string,
} = {
	backdrop: '',
};


export const designSlice = createSlice({
	name: 'design',
	initialState,
	reducers: {
		addBackdrop: (state, action: PayloadAction<{
			backdrop: string
		}>) => {
			state.backdrop = action.payload.backdrop;
		},
	}
})

export default designSlice.reducer;
export const { addBackdrop } = designSlice.actions;
