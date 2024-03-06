import { User } from '@models/user.interface'

export const createUserAdapter = (user: any): User => ({
  id: user.id,
  displayName: user.displayName,
  email: user.email,
})
