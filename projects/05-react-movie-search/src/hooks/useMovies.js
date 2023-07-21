import { useState, useRef } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const previousSearch = useRef(search)

  const getMovies = async () => {
    if (previousSearch.current === search) return

    try {
      setLoading(true)
      setError(null)

      previousSearch.current = search

      const newMovies = await searchMovies(search)
      setMovies(newMovies)
    } catch (error) {
      console.log('Something went wrong')
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }
  return { movies, getMovies, loading }
}
