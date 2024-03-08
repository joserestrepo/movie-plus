import { AuthState } from '@redux/models/auth.state'
import { Store } from '@redux/models/store.model'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RouteProps } from '@models/route.model'
import NavBarComponent from '@components/NavBar/NavBar'
import Loader from '@components/Loader/Loader'

const PrivateRoute: React.FC<RouteProps> = ({ redirecTo, children }) => {
  const authState: AuthState = useSelector((state: Store) => state.auth)

  if (!authState.isAuthenticationValidated && !authState.islogOut) {
    return <Loader data-testid="loader" />
  }

  if (!authState.isAuthenticated) {
    return <Navigate to={redirecTo} replace />
  }
  return (
    <>
      <NavBarComponent />
      {children ? children : <Outlet />}
    </>
  )
}

export default PrivateRoute
