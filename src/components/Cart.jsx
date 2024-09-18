import React from 'react'



function Cart() {

    return (
        <>
            <div className='bg-gray-100 p-4 text-center mt-10 font-bold max-w-2xl mx-auto rounded-md'>
                <div className='flex justify-between'>
                    <h1>
                        Shopping Cart
                    </h1>
                    <button className='text-sm text-red-600'>
                        <span className='underline bg-none'>Remove all</span>
                    </button>
                </div>
                <div className='flex items-center gap-24 mt-10'>
                    <img className='w-[80px] h-16 rounded-t-sm' src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="" />
                    <div className='flex flex-col'>
                        <h3>Apple Juice</h3>
                        <p className="text-gray-600 text-left text-xs">Rating: <span>3.4/5</span></p>
                    </div>
                    <div className="flex items-center px-3 py-1">
                        <button className="text-gray-600 bg-slate-300 px-3 py-1 border rounded-full">+</button>
                        <span className="mx-2">2</span>
                        <button className="text-gray-600 bg-slate-300 px-3 py-1 border rounded-full">-</button>
                    </div>
                    <div className='flex flex-col'>
                        <p>$2.99</p>
                        <button className='text-[10px] text-red-600'>
                            <span className='underline bg-none'>Remove</span>
                        </button>
                    </div>
                </div>
                <div className='flex mt-20 justify-between '>
                    <div>
                        <h3>Sub-Total</h3>
                        <p className="text-gray-600 text-left text-xs">2 items</p>
                    </div>
                    <div>
                        <h3 className='text-[20px]'>$399</h3>
                    </div>
                </div>
                <div className='flex gap-2 mt-7'>
                    <button className='underline'>Go back to shop</button>
                    <button className='bg-blue-300 py-1 px-3 rounded-md'>Checkout</button>
                </div>
            </div>
        </>
    )
}

export default Cart;