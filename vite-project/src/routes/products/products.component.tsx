import { useState } from "react";
import productslist from "../../data/products";



const Products = () => {
    const [addedItems, addItemsToCart] = useState([]);

    const clickButton = (btnText: string) => {
        addItemsToCart([...addedItems, btnText]);
    }


    return (
        <>
            Products
            <div className="grid grid-cols-4 gap-4">
                {productslist.map((item) => (
                    <div 
                        key={item.id}
                        className="border rounded-xl border-width:1px p-3">
                        <div>
                            ID: [{item.id}]
                        </div>                                                
                        <div>
                            {item.name}
                        </div>
                        <div>
                            {item.category}
                        </div>
                        <div>
                            {item.price}
                        </div>
                        <div>
                            <button 
                                className="px-4 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-600"
                                onClick={
                                    () => clickButton(item)
                                }
                            >
                            Add to Cart
                            </button>
                        </div>
                    </div>

                    )
                )}
                </div>
                <div>
                    {addedItems.map((item, index) => (
                        <li key={index}>{item.name}, {item.id}, {item.price}</li>
                    ))}
                </div>
            
            
        </>
    )
}

export default Products;