import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartslice/cartslice";

const store  = configureStore({
    reducer:{
     allcart:cartSlice,
    },
});
export default store;