import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./Appslice"

const Store = configureStore({
    reducer:{
        app: AppSlice
    }
})
export default Store