import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import CategoriesComponent from './Categories'

const mockCategories = [
  { id: 1, name: 'Action' },
  { id: 2, name: 'Drama' },
]

test('renders CategoriesComponent correctly', () => {
  render(
    <MemoryRouter>
      <CategoriesComponent categories={mockCategories} />
    </MemoryRouter>,
  )

  const categoryElements = screen.getAllByRole('link')
  expect(categoryElements).toHaveLength(mockCategories.length)

  mockCategories.forEach((category) => {
    const categoryLink = screen.getByRole('link', { name: category.name })
    expect(categoryLink).toBeInTheDocument()
    expect(categoryLink).toHaveAttribute(`href`, `/movie/genre/${category.id}`)
  })
})
