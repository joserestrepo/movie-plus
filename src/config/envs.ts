const {
  VITE_FIREBASE_APIKEY,
  VITE_FIREBASE_AUTHDOMAIN,
  VITE_FIREBASE_PROJECTID,
  VITE_FIREBASE_STORAGEBUCKET,
  VITE_FIREBASE_MESSAGINGSENDERID,
  VITE_FIREBASE_APPID,
  VITE_FIREBASE_MEASUREMENTID,
  VITE_URL_MOVIES,
  VITE_TOKEN_MOVIES,
  VITE_URL_IMAGES,
} = await import.meta.env

export const envs = {
  firebase_config: {
    apiKey: VITE_FIREBASE_APIKEY,
    authDomain: VITE_FIREBASE_AUTHDOMAIN,
    projectId: VITE_FIREBASE_PROJECTID,
    storageBucket: VITE_FIREBASE_STORAGEBUCKET,
    messagingSenderId: VITE_FIREBASE_MESSAGINGSENDERID,
    appId: VITE_FIREBASE_APPID,
    measurementId: VITE_FIREBASE_MEASUREMENTID,
  },
  url_api: VITE_URL_MOVIES,
  token_api: VITE_TOKEN_MOVIES,
  url_images: VITE_URL_IMAGES,
}
