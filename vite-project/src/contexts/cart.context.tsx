import { createContext, useState } from "react";

export const CartContext = createContext({
    addedItems: null,
    addItemsToCart: () => null,

});

export const CartProvider = ({ children }) => {
    const [addedItems, addItemsToCart] = useState([]);

    const clickButton = (btnText: string) => {
        addItemsToCart([...addedItems, btnText]);
    }    
    
    const value = {
        addedItems,
        clickButton,
    }

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};
