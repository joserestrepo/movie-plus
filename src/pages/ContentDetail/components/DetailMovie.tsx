import { MovieDetail } from '@models/movie-detail.interface'
import { formatMinutesToHours } from '@utils/format-minutes-to-hours'
import React from 'react'

const DetailMovieComponent: React.FC<{ movie: MovieDetail }> = ({ movie }) => {
  return (
    <>
      <h1 className="text-3xl font-extrabold xl:text-5xl">{movie.title}</h1>
      <div>
        <h1 className="text-sm xl:text-lg text-sky-700 font-bold">Director</h1>
        <h2 className="text-lg xl:text-2xl font-bold">
          {movie?.director?.name}
        </h2>
      </div>
      <div>
        <h1 className="text-sm xl:text-lg text-sky-700 font-bold">Productor</h1>
        <h2 className="text-lg xl:text-2xl font-bold">
          {movie &&
            movie?.production_companies?.map((production, index) => (
              <span key={production.id}>
                {production?.name}
                {index < movie.production_companies.length - 1 && ', '}
              </span>
            ))}
        </h2>
      </div>
      <div>
        <p className="text-sm xl:text-lg">{movie.overview}</p>
      </div>
      <div className="flex items-center gap-3 tracking-wider text-sky-700">
        <span>{formatMinutesToHours(movie.runtime)}</span>
        <span
          className="w-[4px] h-[4px] 
              bg-sky-600 rounded-lg inline-block text-sm xl:text-lg"
        ></span>
        <span>{movie.release_date?.split('-')[0]}</span>
        <span
          className="w-[4px] h-[4px] 
              bg-sky-600 rounded-lg inline-block text-sm xl:text-lg"
        ></span>
        <span className="text-sm xl:text-lg">
          {movie &&
            movie?.genres?.map((genres, index) => (
              <span key={genres.id}>
                {genres?.name}
                {index < movie.genres.length - 1 && ', '}
              </span>
            ))}
        </span>
      </div>
    </>
  )
}

export default DetailMovieComponent
