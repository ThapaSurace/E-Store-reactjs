import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authRedux"
import cartReducer from "./cartRedux"
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const rootReducer = combineReducers({ 
    user: authReducer,
    cart: cartReducer
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