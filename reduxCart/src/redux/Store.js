import { configureStore, createReducer } from "@reduxjs/toolkit";
import Cart from "../components/Cart";
import cartReducer from '../redux/Slices/CartSlice'

export const Store=configureStore({
    reducer:{
        cart:cartReducer
    }
});

