import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import hashReducer from './reducers/HashSlice'
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer, PURGE, REGISTER, REHYDRATE,
    persistStore
  } from 'redux-persist';


const rootReducer = combineReducers({
    hashReducer
})

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
  };

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const setupStore = () => {
    return configureStore({
        reducer: persistedReducer,
        // middleware option needs to be provided for avoiding the error. ref: https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
        middleware: [
            ...getDefaultMiddleware({
              serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
              }
            })
        ]
    })
}

export const store = setupStore()
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

