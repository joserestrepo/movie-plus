import React from 'react'
import CategoriesItemComponent from './components/CategoriesItem/CategoriesItem'
import { Genre } from '@models/genre.interface'

const CategoriesComponent: React.FC<{ categories: Array<Genre> }> = ({
  categories = [],
}) => {
  return (
    <div
      className="w-full flex flex-col md:flex-row justify-between gap-5 md:gap-5 p-2 px-5 
                md:px-16 mt-[30px]"
      style={{ boxSizing: 'border-box' }}
    >
      {categories.map((item) => (
        <CategoriesItemComponent genre={item} key={item.id} />
      ))}
    </div>
  )
}

export default CategoriesComponent
