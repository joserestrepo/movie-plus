import { AuthState } from '@redux/models/auth.state'
import { Store } from '@redux/models/store.model'
import React from 'react'
import { useSelector } from 'react-redux'
import { PrivateRouteProps } from './models/PrivateRoute.model'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRoute: React.FC<PrivateRouteProps> = ({ reditecTo, children }) => {
  const authState: AuthState = useSelector((state: Store) => state.auth)
  if (!authState.isAuthenticated) {
    return <Navigate to={reditecTo} replace />
  }
  return children ? children : <Outlet />
}

export default PrivateRoute
