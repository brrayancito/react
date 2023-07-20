import { useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search }) {
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    if (!search) return setMovies(withoutResults)
    const newMovies = await searchMovies(search)
    setMovies(newMovies)
  }
  return { movies, getMovies }
}
