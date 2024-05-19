import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "../slices/CartSlice";

export const CartStore = configureStore({ 
    reducer: {
        cartReducer: CartSliceReducer
    }
})