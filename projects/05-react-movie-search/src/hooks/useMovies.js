import { useState, useRef, useMemo, useEffect, useCallback } from 'react'
import { searchMovies } from '../services/searchMovies'

export function useMovies ({ search, sort }) {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const previousSearch = useRef(search)

  const getMovies = useCallback(async ({ search }) => {
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
  }, [])

  //   const getMovies = useMemo(() => {
  //     return async ({ search }) => {
  //       if (previousSearch.current === search) return

  //       try {
  //         setLoading(true)
  //         setError(null)

  //         previousSearch.current = search

  //         const newMovies = await searchMovies(search)
  //         setMovies(newMovies)
  //       } catch (error) {
  //         console.log('Something went wrong')
  //         setError(error.message)
  //       } finally {
  //         setLoading(false)
  //       }
  //     }
  //   }, [])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [sort, movies])
  return { movies: sortedMovies, getMovies, loading }
}
