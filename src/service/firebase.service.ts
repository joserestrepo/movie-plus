import { auth } from '@config/firebase'
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

  static onAuthStateChanged = () => {
    return new Promise((resolve: any) => {
      auth.onAuthStateChanged((user: unknown) => {
        if (user) {
          startTransition(() => {
            resolve(user)
          })
        }
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
