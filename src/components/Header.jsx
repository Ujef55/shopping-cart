import { IoCart } from "react-icons/io5";
function Header() {
    return (
        <header className='text-center mt-3 font-bold flex justify-between max-w-4xl mx-auto'>
            <h1>
                Happy shopping
            </h1>
            <button className='bg-gray-100 border-l-2 border-stone-700 flex items-center gap-2 px-3 py-1 rounded-md'>
                <IoCart />
                <span>4</span>
            </button>
        </header>
    )
}

export default Header;