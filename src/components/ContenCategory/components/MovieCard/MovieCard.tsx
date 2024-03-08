import { envs } from '@config/envs'
import { Movie } from '@models/movie.interface'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCardComponent: React.FC<{ movie: Movie }> = ({ movie }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/detail/movie/${movie.id}`)
  }

  return (
    <>
      <img
        data-testid="imageCard"
        onClick={handleClick}
        src={`${envs.url_images}${movie.poster_path}`}
        alt="poster"
        className="w-[110px] md:w-[200px] rounded-lg
        hover:border-[3px] border-gray-400 cursor-pointer
        hover:scale-110 transition-all duration-150 ease-in"
      />
    </>
  )
}

export default MovieCardComponent
