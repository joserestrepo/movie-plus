import { createMovieAdapter } from '@adapters/movie.adapter'
import CardBackdropComponent from '@components/CardBackdrop/CardBackdrop'
import ContentCategoryComponent from '@components/ContenCategory/ContentCategory'
import Loader from '@components/Loader/Loader'
import useAsync from '@hooks/useAsync'
import { Movie } from '@models/movie.interface'
import { MoviesService } from '@service/movies.service'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

const MovieByGenreComponent: React.FC = () => {
  const { id } = useParams()
  const [mostPopular, setMostPopular] = useState({} as Movie)

  const adaptMostPopular = (data: any) => {
    setMostPopular(createMovieAdapter(data.results[0]))
  }

  const { loading } = useAsync(
    async () => await MoviesService.mostPopularMovie(Number(id)),
    adaptMostPopular,
    () => {},
  )

  return (
    <>
      {loading && <Loader />}
      <div className="w-full bg-white relative rounded-lg">
        <CardBackdropComponent movie={mostPopular} />
      </div>
      <ContentCategoryComponent
        title="General"
        url="/discover/movie"
        queryParams={{ with_genres: id, include_adult: false }}
      />
      <ContentCategoryComponent
        title="Las más recientes"
        url="/discover/movie"
        queryParams={{
          with_genres: id,
          include_adult: false,
          sort_by: 'revenue.desc',
        }}
      />

      <ContentCategoryComponent
        title="Las más valoradas"
        url="/discover/movie"
        queryParams={{
          with_genres: id,
          include_adult: false,
          sort_by: 'vote_count.desc',
        }}
      />
    </>
  )
}

export default MovieByGenreComponent
