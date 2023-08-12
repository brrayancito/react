import { useState } from 'react'
import { products as initialProducts } from './mocks/products.json'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer'
import { Products } from './components/Products.jsx'

function useFilters () {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return (
      products.filter(product => {
        return (
          product.price >= filters.minPrice && (
            filters.category === 'all' || filters.category === product.category)
        )
      })
    )
  }

  return { filterProducts, setFilters }
}

function App () {
  const [product] = useState(initialProducts)
  const { filterProducts, setFilters } = useFilters()

  const filteredProducts = filterProducts(product)

  return (
    <>
    <Header changeFilters={setFilters}/>
    <Products products={filteredProducts} />
    <Footer />
    </>
  )
}

export default App
