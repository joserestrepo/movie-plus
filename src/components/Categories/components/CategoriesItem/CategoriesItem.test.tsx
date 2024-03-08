import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CategoriesItemComponent from './CategoriesItem'

const mockGenre = {
  id: 1,
  name: 'Action',
}

describe('CategoriesItemComponent', () => {
  test('renders CategoriesItemComponent correctly', () => {
    render(
      <MemoryRouter>
        <CategoriesItemComponent genre={mockGenre} />
      </MemoryRouter>,
    )

    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/movie/genre/1')

    const genreNameElement = screen.getByText('Action')
    expect(genreNameElement).toBeInTheDocument()
  })
})
