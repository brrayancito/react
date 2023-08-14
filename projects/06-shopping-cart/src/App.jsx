import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer'
import { Products } from './components/Products.jsx'
import { Cart } from './components/Cart.jsx'
import useFilters from './hooks/useFilters'
import { CartProvider } from './context/cart.jsx'

function App () {
  const [product] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(product)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}

export default App
