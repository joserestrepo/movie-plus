import './App.css'
import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom'
import { lazy, useEffect, useState } from 'react'
import { Provider, useDispatch } from 'react-redux'

import store from '@redux/store'
import PrivateRoute from '@components/Common/PrivateRoute/PrivateRoute'
import { auth } from '@firebase-utils/firebase.utils'
import { setCurrentUser, signInSucess } from '@redux/slices/auth.slice'
import { createUserAdapter } from '@adapters/user.adapter'
import Loader from '@components/Loader/Loader'

const LoginComponent = lazy(() => import('@pages/Login/Login'))
const HomeComponent = lazy(() => import('@pages/Home/Home'))

const router = createBrowserRouter([
  {
    path: '/login',
    Component: LoginComponent,
  },
  {
    path: '/home',
    element: (
      <PrivateRoute reditecTo="/login">
        <HomeComponent />
      </PrivateRoute>
    ),
  },
  {
    path: '*',
    element: <Navigate to="/login" />,
  },
])

const App: React.FC = () => {
  const [isAuthenticationValidated, setIsAuthenticationValidated] =
    useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: unknown) => {
      if (user) {
        dispatch(setCurrentUser(createUserAdapter(user)))
        dispatch(signInSucess())
      }
      setIsAuthenticationValidated(true)
    })
    return () => unsubscribe()
  })

  return (
    <>
      {!isAuthenticationValidated ? (
        <Loader />
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  )
}

export default App
