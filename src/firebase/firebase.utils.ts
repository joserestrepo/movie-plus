import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithEmailAndPassword as signInWithEmailAndPasswordCopy,
} from 'firebase/auth'

const fireBaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
})

export const auth = getAuth(fireBaseApp)
export const signInWithEmailAndPassword = signInWithEmailAndPasswordCopy
