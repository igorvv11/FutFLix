import { configureStore } from "@reduxjs/toolkit";
import timesReducer from "./timeSlice";

export const store = configureStore({
    reducer: {
    times: timesReducer
}
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
