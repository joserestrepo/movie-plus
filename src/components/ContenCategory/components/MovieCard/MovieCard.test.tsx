import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MovieCardComponent from './MovieCard'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}))

describe('MovieCardComponent', () => {
  const mockMovie = {
    id: 1,
    poster_path: '/example.jpg',
  }

  test('renders MovieCardComponent correctly', () => {
    render(
      <Router>
        <MovieCardComponent movie={mockMovie} />
      </Router>,
    )
    const imageElement = screen.getByTestId('imageCard')
    expect(imageElement).toBeInTheDocument()
  })

  test('navigates on image click', () => {
    const { useNavigate } = require('react-router-dom')
    const navigateMock = jest.fn()
    useNavigate.mockReturnValue(navigateMock)

    render(
      <Router>
        <MovieCardComponent movie={mockMovie} />
      </Router>,
    )

    fireEvent.click(screen.getByTestId('imageCard'))

    expect(navigateMock).toHaveBeenCalledWith(`/detail/movie/${mockMovie.id}`)
  })
})
