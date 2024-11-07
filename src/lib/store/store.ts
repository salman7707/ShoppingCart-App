import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cartslice/cartslice";
import authSlice  from "./features/userslice/authslice";

const store = configureStore({
    reducer: {
        allcart: cartSlice,
        auth: authSlice,
    },
});
export default store;