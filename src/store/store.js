import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./Reducers/Admin/index";


export const store = configureStore({
    reducer: {
        loginReducer,
    },
    devTools: true
})

window.store = store;