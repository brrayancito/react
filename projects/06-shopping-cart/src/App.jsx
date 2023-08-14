import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer'
import { Products } from './components/Products.jsx'
import useFilters from './hooks/useFilters'

function App () {
  const [product] = useState(initialProducts)
  const { filterProducts } = useFilters()

  const filteredProducts = filterProducts(product)

  return (
    <>
    <Header/>
    <Products products={filteredProducts} />
    <Footer />
    </>
  )
}

export default App
