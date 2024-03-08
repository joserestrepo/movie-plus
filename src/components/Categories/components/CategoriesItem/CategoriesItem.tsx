import { Genre } from '@models/genre.interface'
import React from 'react'
import { Link } from 'react-router-dom'

const CategoriesItemComponent: React.FC<{ genre: Genre }> = ({
  genre: { name, id },
}) => {
  return (
    <Link
      to={`/movie/genre/${id}`}
      className="w-full border-[1px] border-gray-600
    rounded-lg hover:scale-105 md:hover:scale-110 transition-all duration-300
    ease-in-out cursor-pointer relative shadow-xl 
    shadow-gray-900 flex md:justify-center content-between p-3  md:p-5 lg:p-10
    "
    >
      <h1 className="text-sm md:text-base lg:text-lg">{name}</h1>
    </Link>
  )
}

export default CategoriesItemComponent
