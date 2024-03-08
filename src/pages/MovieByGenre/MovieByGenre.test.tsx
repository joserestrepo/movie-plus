import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MovieByGenreComponent from './MovieByGenre'

jest.mock('@service/movies.service', () => ({
  __esModule: true,
  MoviesService: {
    mostPopularMovie: jest.fn(() =>
      Promise.resolve({ data: { results: [{}] } }),
    ),
    getMovieCategory: jest.fn(() =>
      Promise.resolve({ data: { results: [{}] } }),
    ),
  },
}))

describe('MovieByGenreComponent', () => {
  it('renders movie by genre correctly', async () => {
    render(
      <Router>
        <MovieByGenreComponent />
      </Router>,
    )

    await waitFor(() => {})

    expect(screen.getByTestId('card-backdrop')).toBeInTheDocument()

    expect(screen.getByText('General')).toBeInTheDocument()
    expect(screen.getByText('Las más recientes')).toBeInTheDocument()
    expect(screen.getByText('Las más valoradas')).toBeInTheDocument()
  })
})
