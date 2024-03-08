import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import Home from './Home'

jest.mock('@hooks/useAsync', () => ({
  __esModule: true,
  default: jest.fn(() => ({ loading: false })),
}))

jest.mock('@service/movies.service', () => ({
  __esModule: true,
  MoviesService: {
    getTrendingVideos: jest.fn(() =>
      Promise.resolve({ data: { results: [] } }),
    ),
    getGenreMovie: jest.fn(() => Promise.resolve({ data: { genres: [] } })),
  },
}))

describe('Home', () => {
  it('renders home content correctly', async () => {
    render(
      <Router>
        <Home />
      </Router>,
    )

    await waitFor(() => {})

    expect(screen.getByTestId('home')).toBeInTheDocument()
  })
})
