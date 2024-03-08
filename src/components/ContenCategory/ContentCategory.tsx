import React, { useState } from 'react'
import MovieListComponent from './components/MovieList/MovieList'
import { ContentCategoryProps } from './models/contentCategory.model'
import useAsync from '@hooks/useAsync'
import { MoviesService } from '@service/movies.service'

const ContentCategoryComponent: React.FC<ContentCategoryProps> = ({
  title,
  url,
  queryParams,
}) => {
  const [moviesList, setMoviesList] = useState([])

  const adaptMoviesList = (data: any) => {
    setMoviesList(data.results)
  }

  useAsync(
    async () => await MoviesService.getMovieCategory(url, queryParams),
    adaptMoviesList,
    () => {},
    [url],
  )

  return (
    <div>
      <div className="p-8 px-8 md:px-16">
        <h2 className="text-[20px] text-white font-bold">{title}</h2>
        <MovieListComponent movies={moviesList} data-testid="movieList" />
      </div>
    </div>
  )
}

export default ContentCategoryComponent
