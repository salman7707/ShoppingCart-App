import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartslice/cartslice";
import state from "@/components/types/state";
const store  = configureStore({
    reducer:{
     allcart:cartSlice,
    },
});
export default store;