"use client"
const { createContext, useState } = require("react");

export const CartContexts = createContext({});

export function CardContextProvider({ children }) {
    const [cartProducts, setCartProducts] = useState([])
    const addToCart = (id) => {
        setCartProducts((prev) => [...prev, id])

    }
    return (
        <CartContexts.Provider value={{ cartProducts, addToCart }}>
            {children}
        </CartContexts.Provider>
    )
}