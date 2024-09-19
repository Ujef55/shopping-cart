import { IoCart } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Header() {


    const { cart, handleShowCart } = useContext(CartContext);

    return (
        <header className='text-center mt-3 font-bold flex justify-between max-w-4xl mx-auto'>
            <h1>
                Happy shopping
            </h1>
            <button onClick={handleShowCart} className='bg-gray-100 border-l-2 border-stone-700 flex items-center gap-2 px-3 py-1 rounded-md'>
                <IoCart />
                <span>{cart.length}</span>
            </button>
        </header>
    )
}

export default Header;