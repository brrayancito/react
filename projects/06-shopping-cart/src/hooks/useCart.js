import { useContext } from 'react'
import { CartContext } from '../context/cart.jsx'

export const useCart = () => {
  const { cart, addToCart, clearCart, removeFromCart } = useContext(CartContext)
  return { cart, addToCart, clearCart, removeFromCart }
}

export default useCart
