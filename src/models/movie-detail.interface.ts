export interface MovieDetail {
  id: number
  director: Director
  genres: Array<{ id: number; name: string }>
  overview: string
  poster_path: string
  production_companies: Array<{
    id: number
    logo_path: string
    name: string
    origin_country: string
  }>
  release_date: string
  runtime: number
  title: string
  vote_average: number
}

interface Director {
  adult: boolean
  credit_id: string
  department: string
  gender: number
  id: number
  job: string
  known_for_department: string
  name: string
  original_name: string
  popularity: number
  profile_path: number
}
