import { useContext } from "react";
import { CartContext } from "../context/CartContext";


function ProductCard() {
    const { products } = useContext(CartContext);
    const { handleAddToCart, loading } = useContext(CartContext);

    function handleClickCart(product) {
        handleAddToCart(product);
    }

    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {loading ? <h1 className="col-span-full text-center">Loading...</h1> : products.map((product) => (
                <div
                    key={product.id}
                    className="bg-white border border-gray-200 rounded-lg flex flex-col p-3 transition-transform duration-200 hover:transform hover:-translate-y-1 hover:shadow-sm"
                >
                    <img
                        className="w-full h-32 object-cover object-center mb-3 rounded-t-sm"
                        src={product.image}
                        alt={product.title}
                    />
                    <div className="mb-3 flex-1">
                        <h2 className="text-sm font-semibold text-gray-800">{product.title}</h2>
                        <div className="flex items-center mt-1">
                            <p className="text-gray-600 text-xs">Rating: <span className={product.rating.rate > 3 ? 'text-slate-900' : 'text-red-700'}>{product.rating.rate}</span></p>
                        </div>
                    </div>
                    <p className="text-gray-700 text-xs mb-1 font-medium">${product.price.toFixed(2)}</p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-1 px-3 rounded-full transition duration-200 w-[50%] mt-auto" onClick={() => handleClickCart(product)}>
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
}

export default ProductCard;
