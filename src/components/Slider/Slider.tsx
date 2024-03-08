import React, { useRef } from 'react'

import { HiChevronLeft, HiChevronRight } from 'react-icons/hi2'
import SliderItemComponent from './SliderItem/SliderItem'
import { Movie } from '@models/movie.interface'

const SliderComponent: React.FC<{ movies: Array<Movie> }> = ({ movies }) => {
  const elementRef = useRef(null)

  const sliderRight = (element: any) => {
    element.scrollLeft += element.clientWidth - 108
  }
  const sliderLeft = (element: any) => {
    element.scrollLeft -= element.clientWidth - 108
  }

  return (
    <div className="relative">
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] lg:mt-[200px] cursor-pointer "
        onClick={() => sliderLeft(elementRef.current)}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] lg:mt-[200px] cursor-pointer right-0"
        onClick={() => sliderRight(elementRef.current)}
      />

      <div
        className="flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movies.map((movie, index) => (
          <SliderItemComponent movie={movie} key={index} />
        ))}
      </div>
    </div>
  )
}

export default SliderComponent
