import { Movie } from '@models/movie.interface'

export const createMovieAdapter = (movie: any): Movie => ({
  adult: movie.adult,
  backdrop_path: movie.backdrop_path,
  id: movie.id,
  title: movie.title,
  original_language: movie.original_language,
  original_title: movie.original_title,
  overview: movie.overview,
  poster_path: movie.poster_path,
  media_type: movie.media_type,
  genre_ids: movie.genre_ids,
  popularity: movie.popularity,
  release_date: movie.release_date,
  video: movie.video,
  vote_average: movie.vote_average,
  vote_count: movie.vote_count,
})
