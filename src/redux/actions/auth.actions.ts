import { signIn } from '@redux/slices/auth.slice'
import { createAction } from '@reduxjs/toolkit'

interface SignInPayload {
  email: string
  password: string
}

interface SignInActionType {
  type: string
  payload: SignInPayload
}

export const signInAction = createAction<SignInActionType>(signIn.type)
