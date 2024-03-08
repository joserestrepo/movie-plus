import { render, screen, fireEvent } from '@testing-library/react'
import MovieListComponent from './MovieList'
import { BrowserRouter as Router } from 'react-router-dom'

const mockMovies = [
  {
    id: 1,
  },
  {
    id: 2,
  },
]

describe('MovieListComponent', () => {
  test('renderiza correctamente', () => {
    render(
      <Router>
        <MovieListComponent movies={mockMovies} />
      </Router>,
    )

    const movieListComponent = screen.getByTestId('movieListComponent')
    expect(movieListComponent).toBeInTheDocument()
  })

  test('slideRight y slideLeft cambian el desplazamiento horizontal correctamente', () => {
    render(
      <Router>
        <MovieListComponent movies={mockMovies} />
      </Router>,
    )

    const elementRef = screen.getByTestId('movieListContainer')

    const slideLeftButton = screen.getByTestId('slideLeftButton')
    const slideRightButton = screen.getByTestId('slideRightButton')

    fireEvent.click(slideRightButton)
    expect(elementRef.scrollLeft).toBe(500)

    fireEvent.click(slideLeftButton)
    expect(elementRef.scrollLeft).toBe(0)
  })
})
