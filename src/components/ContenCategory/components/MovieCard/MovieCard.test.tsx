import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MovieCardComponent from './MovieCard'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(), // Mock useNavigate as a jest.fn()
}))

describe('MovieCardComponent', () => {
  const mockMovie = {
    id: 1,
    poster_path: '/example.jpg',
    // ... other movie properties
  }

  test('renders MovieCardComponent correctly', () => {
    render(
      <Router>
        <MovieCardComponent movie={mockMovie} />
      </Router>,
    )

    // Assert that the image is rendered
    const imageElement = screen.getByTestId('imageCard')
    expect(imageElement).toBeInTheDocument()

    // You can add more assertions based on your component's behavior
  })

  test('navigates on image click', () => {
    const { useNavigate } = require('react-router-dom') // Import useNavigate from react-router-dom
    const navigateMock = jest.fn()
    useNavigate.mockReturnValue(navigateMock)

    render(
      <Router>
        <MovieCardComponent movie={mockMovie} />
      </Router>,
    )

    // Simulate a click on the image
    fireEvent.click(screen.getByTestId('imageCard'))

    // Assert that the navigate function was called with the correct path
    expect(navigateMock).toHaveBeenCalledWith(`/detail/movie/${mockMovie.id}`)
  })
})
