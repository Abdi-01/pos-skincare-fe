import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./data";

const globalStore = configureStore({
    reducer: {
        authReducer,
    },
});

export default globalStore;
