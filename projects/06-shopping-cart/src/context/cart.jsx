import { createContext, useState } from 'react'

// 1) Create the context
export const CartContext = createContext()

// Update localStorage with the new cart
const updateLocalStorage = (state) => {
  return window.localStorage.setItem('cart', JSON.stringify(state))
}

// 2) Create the provider, to provide the context to the app
export function CartProvider ({ children }) {
  const [cart, setCart] = useState(
    JSON.parse(window.localStorage.getItem('cart')) || []
  )

  const addToCart = (product) => {
    // Check if the product is already in the cart
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    // If the product is already in the cart, just update the quantity
    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      updateLocalStorage(newCart)
      return setCart(newCart)
    }

    // If the product is not in the cart, add it
    const newCart = [
      ...cart,
      {
        ...product,
        quantity: 1
      }
    ]
    updateLocalStorage(newCart)
    return setCart(newCart)
  }

  const removeFromCart = (product) => {
    const newCart = cart.filter(item => item.id !== product.id)
    updateLocalStorage(newCart)
    return setCart(newCart)
  }

  const clearCart = () => {
    const newCart = []
    updateLocalStorage(newCart)
    return setCart(newCart)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
