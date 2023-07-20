import withResults from '../mocks/yes-results.json'
import withoutResults from '../mocks/no-results.json'

import { useState } from 'react'

export function useMovies ({ search }) {
  const [responseMovies, setResponseMovies] = useState([])
  const movies = responseMovies.Search

  const mappedMovies = movies?.map((movies) => ({
    id: movies.imdbID,
    title: movies.Title,
    year: movies.Year,
    poster: movies.Poster

  }))

  const getMovies = async () => {
    if (!search) return setResponseMovies(withoutResults)

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=69d9d4b&s=${search}`)
      const data = await res.json()
      setResponseMovies(data)
    } catch (error) {
      console.log('Something went wrong')
    }
  }
  return { movies: mappedMovies, getMovies }
}
