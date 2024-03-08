import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from '@redux/models/auth.state'

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
  inValid: false,
  isAuthenticated: false,
  isSuccess: false,
  isAuthenticationValidated: false,
  islogOut: false,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => ({
      ...state,
      currentUser: { ...action.payload },
    }),

    signIn: (state) => ({
      ...state,
      loading: true,
    }),

    signInSucess: (state) => ({
      ...state,
      loading: false,
      inValid: false,
      isSuccess: true,
      isAuthenticated: true,
      islogOut: false,
    }),

    signInFailure: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
      inValid: true,
    }),

    authenticationValidated: (state) => ({
      ...state,
      isAuthenticationValidated: true,
    }),

    signOut: (state) => ({
      ...state,
      loading: true,
    }),

    signOutSucess: (state) => ({
      ...state,
      currentUser: null,
      loading: false,
      error: null,
      inValid: false,
      isAuthenticated: false,
      isSuccess: false,
      isAuthenticationValidated: false,
      islogOut: true,
    }),
  },
})

export const {
  setCurrentUser,
  signIn,
  signInSucess,
  signInFailure,
  authenticationValidated,
  signOut,
  signOutSucess,
} = authSlice.actions

export default authSlice.reducer
