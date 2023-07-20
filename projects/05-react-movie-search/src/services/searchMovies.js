const API_KEY = '69d9d4b'
// API = 'https://www.omdbapi.com/?apikey=69d9d4b&s=${search}'

export const searchMovies = async (search) => {
  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`)
    const data = await res.json()

    const movies = data.Search

    const mappedMovies = movies?.map((movies) => ({
      id: movies.imdbID,
      title: movies.Title,
      year: movies.Year,
      poster: movies.Poster

    }))

    return mappedMovies
  } catch (error) {
    console.log('Something went wrong')
  }
}
