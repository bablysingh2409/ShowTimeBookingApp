import { configureStore } from "@reduxjs/toolkit";
import { showReducer } from "./reducer/showsReducer";


export const store=configureStore({
    reducer:{
        showReducer
    }
})