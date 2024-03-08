import useAsync from '@hooks/useAsync'
import { MoviesService } from '@service/movies.service'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieDetail } from '@models/movie-detail.interface'
import { createMovieDetailAdapter } from '@adapters/movieDetail.adapter'
import { envs } from '@config/envs'
import Loader from '@components/Loader/Loader'
import DetailMovieComponent from './components/DetailMovie'
import ContentCategoryComponent from '@components/ContenCategory/ContentCategory'
import BackComponent from '@components/Back/Back'

const ContentDetailComponent: React.FC = () => {
  const [movie, setMovie] = useState({} as MovieDetail)
  const { id } = useParams()

  const adaptMovieDetail = (data: any) => {
    setMovie(createMovieDetailAdapter(data))
  }

  const { loading } = useAsync(
    async () => await MoviesService.getMovieById(Number(id)),
    adaptMovieDetail,
    () => {},
    [id],
  )

  return (
    <>
      {loading && <Loader />}
      <div
        className="w-full overflow-hidden 
                     relative shadow-lg bg-black top-0 bottom-0
                    bg-gradient-to-t from-gray-950 to-transparent 
                    bg-opacity-70 p-10"
      >
        <img
          className="w-full absolute top-0 left-0 
          h-auto object-cover object-right-top -z-40"
          src={`${envs.url_images}${movie.poster_path}`}
          alt=""
        />
        <BackComponent />
        <div className="flex">
          <div
            className="w-full flex gap-8"
            style={{ boxSizing: 'border-box' }}
          >
            <div className="hidden md:block w-[30%]">
              <img
                className="w-full object-cover rounded-xl"
                src={`${envs.url_images}${movie.poster_path}`}
                alt="poaster-movie"
              />
            </div>
            <div className="w-[100%] md:w-[70%] flex flex-col gap-6">
              <DetailMovieComponent movie={movie} />
            </div>
          </div>
        </div>
      </div>
      <ContentCategoryComponent
        title="Recomendaciones"
        url={`/movie/${id}/recommendations`}
        queryParams={{ with_genres: id, include_adult: false }}
      />
    </>
  )
}

export default ContentDetailComponent
