import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authRedux"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({ 
    user: authReducer,
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({
            serializableCheck: false
        })
})

export let persistor = persistStore(store)