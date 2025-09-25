import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cart.context";

const Cart = () => {

    const {currentCartContents, addToCart, removeFromCart, cartTotalPrice} = useContext(CartContext);

    const totalPrice = 1223.33;
    
    return (
        <>
            <div className="text-center">
                <p className="text-[42px]">
                    CART
                </p>
            </div>

            {currentCartContents.length > 0 ? (
                <div>

                    <div className="px-4 py- text-black bg-blue-100 rounded-lg border border-width: 0.5px px-3 py-3">
                        <div className="grid grid-cols-6 rounded-lg px-4 py-1">
                            <div>Name</div>
                            <div>ID</div>
                            <div>Category</div>
                            <div>QTY</div>
                            <div>Price</div>
                        </div>
                        {currentCartContents.map((cartItem) => (
                            <div className="grid grid-cols-6 border border-width:0.25px rounded-lg px-4 py-1"
                                key={cartItem.id}
                            >
                                <div>{cartItem.name}</div>
                                <div>ID:[{cartItem.id}]</div>
                                <div>{cartItem.category}</div>
                                <div>{cartItem.qty}</div>
                                <div>{cartItem.price}</div>
                                <div className="grid grid-cols-2">
                                    <div>
                                        <button 
                                            className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
                                            onClick ={()=>{addToCart(cartItem)}}
                                        >
                                            Add +1
                                        </button>
                                    </div>
                                    <div>
                                        <button 
                                            className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
                                            onClick ={()=>{removeFromCart(cartItem)}}
                                        >
                                            Remove -1
                                        </button>                            
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="px-4 py- text-black text-right bg-blue-100 rounded-lg border border-width: 0.5px px-3 py-3">
                        <div className="text-3xl">
                            TOTAL: {cartTotalPrice} CHF
                        </div>
                    </div>
                </div>

            ) : (
                <div className="text-center">
                    NOTHING IN CART
                    <div>
                        <Link 
                            className="underline hover:text-blue-500" 
                            to="/products"
                        >
                            Back to Products
                        </Link>
                    </div>
                </div>
            )}



        </>
    )
}

export default Cart;