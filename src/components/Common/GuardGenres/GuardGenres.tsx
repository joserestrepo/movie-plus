import { AuthState } from '@redux/models/auth.state'
import { Store } from '@redux/models/store.model'
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { RouteProps } from '@models/route.model'

const GuardGenres: React.FC<RouteProps> = ({ redirecTo, children }) => {
  const authState: AuthState = useSelector((state: Store) => state.auth)
  if (!authState.isAuthenticated) {
    return <Navigate to={redirecTo} />
  }
  return children ? children : <Outlet />
}

export default GuardGenres
