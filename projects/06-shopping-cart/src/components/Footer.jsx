import './Footer.css'
import useCart from '../hooks/useCart.js'
export function Footer () {
  const { cart } = useCart()
  // const { filters } = useFilters()

  return (
    <footer className='footer'>
      <h4>React Technical interview ⚛️</h4>
      <h5>Shopping Cart with useContext & useReducer</h5>
    </footer>
  )
}
