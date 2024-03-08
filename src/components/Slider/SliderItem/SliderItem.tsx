import { envs } from '@config/envs'
import { Movie } from '@models/movie.interface'
import React from 'react'

const SliderItemComponent: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <>
      <img
        className="min-w-full md:h-[310px] lg:h-[410px] xl:h-[410px] object-fill mr-5 rounded-md hover:border-[4px]
            border-gray-400 transition-all duration-100 ease-in "
        src={`${envs.url_images}${movie.backdrop_path}`}
        alt="image"
      />
    </>
  )
}

export default SliderItemComponent
