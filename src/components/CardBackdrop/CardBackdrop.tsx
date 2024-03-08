import { envs } from '@config/envs'
import { Movie } from '@models/movie.interface'
import React from 'react'

const CardBackdropComponent: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <>
      <img
        className="w-full object-cover"
        src={`${envs.url_images}${movie.backdrop_path}`}
        alt=""
      />
      <div className="w-full bg-transparent absolute bottom-0 left-0 right-0 px-16 py-10 ">
        <h1 className="text-xl font-bold mb-1">{movie.title}</h1>
        <p className="text-xs">{movie.overview}</p>
      </div>
    </>
  )
}

export default CardBackdropComponent
