import { MovieDetail } from '@models/movie-detail.interface'

export const createMovieDetailAdapter = (movieDetail: any): MovieDetail => ({
  id: movieDetail.id,
  director: movieDetail.director,
  genres: movieDetail.genres,
  overview: movieDetail.overview,
  poster_path: movieDetail.poster_path,
  production_companies: movieDetail.production_companies,
  release_date: movieDetail.release_date,
  runtime: movieDetail.runtime,
  title: movieDetail.title,
  vote_average: movieDetail.vote_average,
})
