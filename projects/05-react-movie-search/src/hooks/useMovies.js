import { useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getMovies = async () => {
    try {
      setLoading(true)
      setError(null)

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
