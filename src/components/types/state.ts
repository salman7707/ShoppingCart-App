import product from "./product";
export default interface state {
    cart:product[];
    productItem:product[];
    totalQuantity:number;
    totalPrice:number;
}