import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./slice/attributeSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Local storage for persistence

// Persist config: specifies which parts of the state to persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["attribute"], // Persist only the 'user' slice
};

const persistedReducer = persistReducer(persistConfig, userReducer);

// Creating the Redux store
export const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
});

// Create the persistor
export const persistor = persistStore(store);

// Infer the RootState and AppDispatch types from the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
