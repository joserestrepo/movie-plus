import './App.css'
import { RouterProvider } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import RoutesApp from './routes'
import { validateUserAuthenticity } from '@redux/slices/auth.slice'

const App: React.FC = () => {
  const { router } = RoutesApp()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: validateUserAuthenticity.type })
  }, [])

  return (
    <>
      <div className="w-full">
        <RouterProvider router={router} />
      </div>
    </>
  )
}

export default App
