import { lazy, Suspense } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'
import PrivateRoute from '@components/Common/PrivateRoute/PrivateRoute'
import Loader from '@components/Loader/Loader'

const LoginComponent = lazy(() => import('@pages/Login/Login'))

const HomeComponent = lazy(() => import('@pages/Home/Home'))
const MovieByGenreComponent = lazy(
  () => import('@pages/MovieByGenre/MovieByGenre'),
)
const ContentDetailComponent = lazy(
  () => import('@pages/ContentDetail/ContentDetail'),
)
const SelectGenresComponent = lazy(
  () => import('@pages/SelectGenres/SelectGenres'),
)

const RoutesApp = () => {
  const router = createBrowserRouter([
    {
      path: '/login',
      Component: LoginComponent,
    },
    {
      path: '/home',
      element: (
        <PrivateRoute redirecTo="/login">
          <Suspense fallback={<Loader />}>
            <HomeComponent />
          </Suspense>
        </PrivateRoute>
      ),
    },
    {
      path: '/movie/genre/:id',
      element: (
        <PrivateRoute redirecTo="/login">
          <Suspense fallback={<Loader />}>
            <MovieByGenreComponent />
          </Suspense>
        </PrivateRoute>
      ),
    },
    {
      path: '/detail/movie/:id',
      element: (
        <PrivateRoute redirecTo="/login">
          <Suspense fallback={<Loader />}>
            <ContentDetailComponent />
          </Suspense>
        </PrivateRoute>
      ),
    },
    {
      path: '/select-genres',
      element: (
        <PrivateRoute redirecTo="/login">
          <Suspense fallback={<Loader />}>
            <SelectGenresComponent />
          </Suspense>
        </PrivateRoute>
      ),
    },
    {
      path: '*',
      element: <Navigate to="/login" />,
    },
  ])

  return { router }
}

export default RoutesApp
