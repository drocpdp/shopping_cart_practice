import productslist from "../../data/products";

const Products = () => {
    return (
        <>
            Products
            <div className="grid grid-cols-4 gap-4">
                {productslist.map((item) => (
                    <div className="border rounded-xl border-width:1px p-3">
                        <div>
                            {item.id}
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
                            >
                            Add to Cart
                            </button>
                        </div>
                    </div>
                    )
                )}
            </div>
        </>
    )
}

export default Products;