import { configureStore } from "@reduxjs/toolkit";
import { homeSlice } from "./slices/homepageSlice";
import { buildSlice } from "./slices/buildSlice";
import { OrderSlice } from "./slices/orderSlice";



export const store = configureStore({
    reducer:{
        home:homeSlice.reducer,
        build:buildSlice.reducer,
        order:OrderSlice.reducer
    }
})