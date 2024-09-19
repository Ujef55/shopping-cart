import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [cartPage, setCartPage] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const handleAddToCart = (product) => {
        setCart([...cart, product]);
    };

    function handleShowCart() {
        setCartPage(true);
    }

    function handleShowProductsPage() {
        setCartPage(false);
    }


    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setProducts(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchCartData();
    }, []);

    return (
        <CartContext.Provider value={{ products, loading, error, handleAddToCart, handleShowCart, cartPage, cart, handleShowProductsPage, loading }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;
