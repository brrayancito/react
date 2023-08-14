import { createContext, useState } from 'react'

// 1) Create the context
export const FiltersContext = createContext()

// 2) Create the provider, to provide the context to the app
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 50
  })
  return (
    <FiltersContext.Provider value={{
      filters, setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
