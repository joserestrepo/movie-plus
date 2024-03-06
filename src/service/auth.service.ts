import { createUserAdapter } from '@adapters/user.adapter'
import {
  auth,
  signInWithEmailAndPassword,
} from '@firebase-utils/firebase.utils'

export const signInService = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password)

    const user = createUserAdapter(result.user)
    return { user }
  } catch (error) {
    throw error
  }
}
