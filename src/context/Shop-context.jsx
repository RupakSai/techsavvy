import React, { createContext, useState } from "react";
import { PRODUCTS } from "../pages/ProductList";

export const ShopContext = createContext(null);
const getDefaultCart = () =>{
    let cart ={}
    for(let i=1; i<=PRODUCTS.length; i++){
        cart[i] = 0;
    }
    return cart
}
export const ShopContextProvider = (props) =>{
    const [cartItems, setcartItems] = useState(getDefaultCart());
    const getCartTotalAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount = totalAmount + cartItems[item]*itemInfo.price;
            }
        }
        return totalAmount;
    }
    const addToCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId]:prev[itemId] + 1}))
    }
    const removeFromCart = (itemId) => {
        setcartItems((prev) => ({...prev, [itemId]:prev[itemId] - 1}))
    }
    const updateCartItemCount = (newAmount, itemId) => {
        setcartItems((prev) => ({...prev, [itemId]:newAmount}))
    }
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getCartTotalAmount}
    console.log(cartItems);
    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>;
}