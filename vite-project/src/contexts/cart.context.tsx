import { createContext, useState } from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
    const [ currentCartContents, changeCartContents ] = useState([]);
    const [ cartTotalPrice, changeCartTotalPrice ] = useState(0);

    const calculateNewTotalPrice = () => {
        let newPrice = 0;
        for (let item of currentCartContents){
            newPrice += (item.price * item.qty);
        }
        changeCartTotalPrice(newPrice);

    }

    const addToCart = (productToAdd) => {
        const existingItemInCart = currentCartContents.find(item => item.id === productToAdd.id);
        if (!existingItemInCart){
            productToAdd["qty"] = 1;
            changeCartContents([...currentCartContents, productToAdd]);
        }
        else {
            for (let item of currentCartContents){
                if (item.id === existingItemInCart.id){
                    item.qty += 1;
                }
            }
            changeCartContents([...currentCartContents]);
        }
        calculateNewTotalPrice();
        
    }

    const removeFromCart = (productToRemove) => {
        const existingItemInCart = currentCartContents.find(item => item.id === productToRemove.id);
        const newCart = [];
        if (existingItemInCart){
            for (let iitem of currentCartContents){
                if (iitem.id === existingItemInCart.id){
                    iitem.qty -= 1;
                    if (iitem.qty > 0){
                        newCart.push(iitem);
                    }
                }
                else{
                    newCart.push(iitem);
                }
            }
            changeCartContents(newCart);
        }
        calculateNewTotalPrice();
        
    }

    const value = { 
        currentCartContents, 
        changeCartContents,
        addToCart,
        removeFromCart,
        cartTotalPrice,
        changeCartTotalPrice,
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}