import { Genre } from '@models/genre.interface'

export const genreAdapter = (genre: any): Genre => ({
  id: genre.id,
  name: genre.name,
})
