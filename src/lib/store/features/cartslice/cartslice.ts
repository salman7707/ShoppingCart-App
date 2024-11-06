import { createSlice } from "@reduxjs/toolkit";
import Productdata from "../../productdata";
import State from "../../../../components/types/state";

const initialState: State = {
    cart: [],
    productItem: Productdata,
    totalQuantity: 0,
    totalPrice: 0,
}

export const cartSlice = createSlice({
    name: "cartProducts",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const find = state.cart.findIndex((item) => item.id === action.payload.id)
            if (find >= 0) {
                state.cart[find].quantity += 1
            } else {
                state.cart.push(action.payload)
            }
        },
        getCartTotal:(state)=>{
            const {totalPrice,totalQuantity} = state.cart.reduce(
                (cartTotal,cartItems)=>{
                    const { price, quantity } = cartItems;
                    const itemsTotal = price * quantity;
                    cartTotal.totalPrice += itemsTotal
                    cartTotal.totalQuantity += quantity
                    return cartTotal
                },
                {
                    totalPrice:0,
                    totalQuantity:0
                }
            )
            state.totalPrice = parseInt(totalPrice.toFixed(2))
            state.totalQuantity = totalQuantity
        },
        removeItem:(state,action)=>{
            state.cart = state.cart.filter((item)=>item.id !== action.payload)
        },
        increaseQuantity:(state,action)=>{
           state.cart = state.cart.map( (item)=>{
                if(item.id === action.payload){
                    return {...item,quantity: item.quantity + 1}
                }
                return item
           } )
        },
        decreaseQuantity:(state,action)=>{
            state.cart = state.cart.map( (item)=>{
                 if(item.id === action.payload){
                     return {...item,quantity: item.quantity - 1}
                 }
                 return item
            } )
         }
    }
})

export const { addToCart, getCartTotal, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;