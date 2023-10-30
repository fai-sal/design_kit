import { configureStore } from '@reduxjs/toolkit';
import elementsReducer from '../features/elements'
import designReducer from '../features/design';
import metaReducer from '../features/meta';
import { combineReducers } from 'redux'

import {
	persistStore,
	FLUSH,
	PAUSE,
	PERSIST,
	persistReducer,
	PURGE,
	REGISTER,
	REHYDRATE,
} from "redux-persist";
import storage from 'redux-persist/lib/storage';

//persist
const persistConfig = {
	key: 'canvas',
	storage
};

const rootReducer = combineReducers({
	elements: elementsReducer,
	design: designReducer,
	meta: metaReducer,
}
)
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: {
		canvas: persistedReducer
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			}
		})
})

export default store;
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
