import { createUserAdapter } from '@adapters/user.adapter'
import { auth } from '@config/firebase'
import {
  authenticationValidated,
  setCurrentUser,
  signInSucess,
} from '@redux/slices/auth.slice'
import { Dispatch } from 'redux'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { startTransition } from 'react'

export class FirebaseService {
  static async signInWithEmailAndPassword(email: string, password: string) {
    try {
      return await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      throw error
    }
  }

  static onAuthStateChanged = (
    dispatch: Dispatch,
    setIsAuthenticationValidated: (
      value: React.SetStateAction<boolean>,
    ) => void,
  ) => {
    return auth.onAuthStateChanged((user: unknown) => {
      if (user) {
        startTransition(() => {
          dispatch(setCurrentUser(createUserAdapter(user)))
          dispatch(signInSucess())
          dispatch(authenticationValidated())
        })
      }
      startTransition(() => {
        setIsAuthenticationValidated(true)
      })
    })
  }

  static signOut = async () => {
    try {
      return await signOut(auth)
    } catch (error) {
      throw error
    }
  }
}
