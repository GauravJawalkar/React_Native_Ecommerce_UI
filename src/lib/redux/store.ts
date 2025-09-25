import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './slices/couterSlice';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['counter'],
}

const rootReducer = combineReducers({
    counter: counterReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;