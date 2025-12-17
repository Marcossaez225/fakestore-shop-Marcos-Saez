import { createContext, useState, useEffect } from "react"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  )

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const removeFromCart = (index) => {
    const newCart = [...cart]
    newCart.splice(index, 1)
    setCart(newCart)
  }

  const total = cart.reduce((acc, p) => acc + p.price, 0)
  const count = cart.length


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, total, count }}>
      {children}
    </CartContext.Provider>
  )
}
