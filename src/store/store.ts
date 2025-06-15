
import {configureStore} from "@reduxjs/toolkit";
import counterReducer from "../slices/counterSlice"
import {rootReducer} from "../reducers/rootReducer";

export const store = configureStore({
    reducer: rootReducer  // This is where you combine all your reducers


});

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;


