import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MovieDetail } from '@models/movie-detail.interface'
import { formatMinutesToHours } from '@utils/format-minutes-to-hours'
import DetailMovieComponent from './DetailMovie'

describe('DetailMovieComponent', () => {
  const mockMovie: MovieDetail = {
    id: 1,
    title: 'Test Movie',
    director: {
      adult: false,
      credit_id: '',
      department: '',
      gender: 0,
      id: 1,
      job: '',
      known_for_department: '',
      name: 'Test Director',
      original_name: '',
      popularity: 0,
      profile_path: 0,
    },
    production_companies: [
      {
        id: 1,
        name: 'Test Company',
        logo_path: '',
        origin_country: '',
      },
    ],
    overview: 'Test overview',
    runtime: 120,
    release_date: '2022-01-01',
    genres: [
      { id: 1, name: 'Action' },
      { id: 2, name: 'Adventure' },
    ],
    poster_path: '',
    vote_average: 0,
  }

  it('renders movie details correctly', () => {
    render(<DetailMovieComponent movie={mockMovie} />)

    expect(screen.getByText(mockMovie.title)).toBeInTheDocument()
    expect(screen.getByText(`${mockMovie.director?.name}`)).toBeInTheDocument()
    expect(
      screen.getByText(`${mockMovie.production_companies[0]?.name}`),
    ).toBeInTheDocument()
    expect(screen.getByText(mockMovie.overview)).toBeInTheDocument()
    expect(
      screen.getByText(formatMinutesToHours(mockMovie.runtime)),
    ).toBeInTheDocument()
    expect(
      screen.getByText(mockMovie.release_date?.split('-')[0]),
    ).toBeInTheDocument()
  })
})
