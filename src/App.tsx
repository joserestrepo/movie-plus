import './App.css'
import { RouterProvider } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FirebaseService } from '@service/firebase.service'
import RoutesApp from './routes'

const App: React.FC = () => {
  const [_, setIsAuthenticationValidated] = useState(false)
  const { router } = RoutesApp()
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = FirebaseService.onAuthStateChanged(
      dispatch,
      setIsAuthenticationValidated.bind(this),
    )
    return () => unsubscribe()
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
