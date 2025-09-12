import { useContext } from "react";
import { CartContext, CartProvider } from "../../contexts/cart.context";

const Cart = () => {
    const { addedItems } = useContext(CartContext);
    
    return (
        <>
            Cart

            <div>
                    {addedItems.map((item, index) => (
                        <li key={index}>{item.name}, {item.id}, {item.price}</li>
                    ))}
            </div>



        </>
    )
}

export default Cart;