import { User } from '@models/user.interface'

export interface AuthState {
  currentUser: User | null
  loading: boolean
  error: string | null
  inValid: boolean
  isAuthenticated: boolean
  isAuthenticationValidated: boolean
  isSuccess: boolean
  islogOut: boolean
}
