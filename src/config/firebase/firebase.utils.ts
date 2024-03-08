import { envs } from '@config/envs'
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

export const fireBaseApp = initializeApp(envs.firebase_config)

export const auth = getAuth(fireBaseApp)
