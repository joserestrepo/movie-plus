import { render, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import ContentDetailComponent from './ContentDetail'

jest.mock('@hooks/useAsync', () => ({
  __esModule: true,
  default: jest.fn(() => ({ loading: false })),
}))

jest.mock('@service/movies.service', () => ({
  __esModule: true,
  MoviesService: {
    getMovieById: jest.fn(() => Promise.resolve({ data: {} })),
  },
}))

describe('ContentDetailComponent', () => {
  it('renders content detail correctly', async () => {
    render(
      <Router>
        <ContentDetailComponent />
      </Router>,
    )

    await waitFor(() => {})

    expect(screen.getByText(/Recomendaciones/i)).toBeInTheDocument()
  })
})
