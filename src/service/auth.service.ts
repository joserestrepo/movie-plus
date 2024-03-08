import { createUserAdapter } from '@adapters/user.adapter'
import { FirebaseService } from './firebase.service'

export class AuthService {
  static async signIn(email: string, password: string) {
    try {
      const result = await FirebaseService.signInWithEmailAndPassword(
        email,
        password,
      )
      return createUserAdapter(result.user)
    } catch (error) {
      throw error
    }
  }

  static async signOut() {
    try {
      return await FirebaseService.signOut()
    } catch (error) {
      throw error
    }
  }

  static async onAuthStateChanged() {
    try {
      return await FirebaseService.onAuthStateChanged()
    } catch (error) {
      throw error
    }
  }
}
