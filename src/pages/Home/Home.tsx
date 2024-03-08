import SliderComponent from '@components/Slider/Slider'
import React, { useState } from 'react'

import CategoriesComponent from '@components/Categories/Categories'
import { MoviesService } from '@service/movies.service'
import useAsync from '@hooks/useAsync'
import { createMovieAdapter } from '@adapters/movie.adapter'
import { genreAdapter } from '@adapters/genre.adapter'
import Loader from '@components/Loader/Loader'

const Home: React.FC = () => {
  const [moviesTrending, setMoviesTrending] = useState([])
  const [genreList, setGenreList] = useState([])

  const adaptMoviesTrending = (data: any) => {
    setMoviesTrending(
      data.results
        .map((movie: unknown) => createMovieAdapter(movie))
        .slice(0, 10),
    )
  }

  const adaptGenreList = (data: any) => {
    setGenreList(
      data.genres.map((genre: unknown) => genreAdapter(genre)).slice(0, 5),
    )
  }

  const { loading } = useAsync(
    MoviesService.getTrendingVideos,
    adaptMoviesTrending,
    () => {},
  )

  const { loading: loaderGenre } = useAsync(
    MoviesService.getGenreMovie,
    adaptGenreList,
    () => {},
  )

  return (
    <div>
      {(loading || loaderGenre) && <Loader />}
      <SliderComponent movies={moviesTrending} />
      <CategoriesComponent categories={genreList} />
    </div>
  )
}

export default Home
