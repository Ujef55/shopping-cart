import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Cart() {
    const { handleShowProductsPage, cart } = useContext(CartContext);

    return (
        <div className='bg-gray-100 p-4 text-center mt-10 font-bold max-w-2xl mx-auto rounded-md'>
            {cart.length <= 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className='flex justify-between'>
                        <h1>Shopping Cart</h1>
                        <button className='text-sm text-red-600'>
                            <span className='underline bg-none'>Remove all</span>
                        </button>
                    </div>
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className='flex items-center gap-24 mt-10'>
                                <img className='w-[80px] h-16 rounded-t-sm' src={item.image} alt="" />
                                <div className='flex flex-col'>
                                    <h3>{item.title}</h3>
                                    <p className="text-gray-600 text-left text-xs">Rating: <span>{item.rating.rate}/5</span></p>
                                </div>
                                <div className="flex items-center px-3 py-1">
                                    <button className="text-gray-600 bg-slate-300 px-3 py-1 border rounded-full">+</button>
                                    <span className="mx-2">1</span>
                                    <button className="text-gray-600 bg-slate-300 px-3 py-1 border rounded-full">-</button>
                                </div>
                                <div className='flex flex-col'>
                                    <p>${item.price}</p>
                                    <button className='text-[10px] text-red-600'>
                                        <span className='underline bg-none'>Remove</span>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}
            <div className='flex gap-2 mt-7'>
                <button onClick={handleShowProductsPage} className='underline'>Go back to shop</button>
                <button className='bg-blue-300 py-1 px-3 rounded-md'>Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
