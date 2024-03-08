import React, { useRef } from 'react'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'
import MovieCardComponent from '../MovieCard/MovieCard'
import { Movie } from '@models/movie.interface'

const MovieListComponent: React.FC<{ movies: Movie[] }> = ({ movies }) => {
  const elementRef = useRef(null)

  const slideRight = (element: any) => {
    element.scrollLeft += 500
  }
  const slideLeft = (element: any) => {
    element.scrollLeft -= 500
  }

  return (
    <div className="relative" data-testid="movieListComponent">
      <IoChevronBackOutline
        onClick={() => slideLeft(elementRef.current)}
        className={`text-[50px] text-white p-2 z-10 cursor-pointer 
                    hidden md:block absolute left-0 mt-[150px] `}
        data-testid="slideLeftButton"
      />

      <div
        ref={elementRef}
        className="flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4"
        data-testid="movieListContainer"
      >
        {movies.map((movie) => (
          <MovieCardComponent movie={movie} key={movie.id} />
        ))}
      </div>
      <IoChevronForwardOutline
        onClick={() => slideRight(elementRef.current)}
        className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0
                    absolute right-0 mt-[150px] `}
        data-testid="slideRightButton"
      />
    </div>
  )
}

export default MovieListComponent
