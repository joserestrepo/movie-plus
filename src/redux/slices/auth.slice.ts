import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from 'redux/models/auth.state'

const initialState: AuthState = {
  currentUser: null,
  loading: false,
  error: null,
  inValid: false,
  isAuthenticated: false,
  isSuccess: false,
}
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state, action) => {
      state.currentUser = { ...state.currentUser, ...action.payload }
    },

    signIn: (state) => {
      state.loading = true
    },

    signInSucess: (state) => {
      state.loading = false
      state.inValid = false
      state.isSuccess = true
      state.isAuthenticated = true
    },

    signInFailure: (state, action) => {
      state.loading = false
      state.error = action.payload
      state.inValid = true
    },
  },
})

export const { setCurrentUser, signIn, signInSucess, signInFailure } =
  authSlice.actions

export default authSlice.reducer
