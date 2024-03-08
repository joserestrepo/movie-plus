import { render, waitFor, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { MemoryRouter } from 'react-router-dom'
import configureStore from 'redux-mock-store'
import PrivateRoute from './PrivateRoute'

const mockAuthState = {
  isAuthenticated: true,
  isAuthenticationValidated: true,
  islogOut: false,
}

const mockStore = configureStore()

describe('PrivateComponent', () => {
  test('renderiza correctamente cuando el usuario está autenticado', async () => {
    const store = mockStore({
      auth: mockAuthState,
    })
    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PrivateRoute redirecTo="/login">Contenido autenticado</PrivateRoute>
        </MemoryRouter>
      </Provider>,
    )
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull()
    })
    expect(container).toBeInTheDocument()
  })

  test('redirige correctamente cuando el usuario no está autenticado', async () => {
    const mockUnauthenticatedStore = {
      isAuthenticated: false,
      isAuthenticationValidated: true,
      islogOut: false,
    }

    const store = mockStore({
      auth: mockUnauthenticatedStore,
    })

    const { container } = render(
      <Provider store={store}>
        <MemoryRouter>
          <PrivateRoute redirecTo="/login">Contenido autenticado</PrivateRoute>
        </MemoryRouter>
      </Provider>,
    )
    await waitFor(() => {
      expect(screen.queryByTestId('loader')).toBeNull()
    })
    expect(container).toBeEmptyDOMElement()
  })
})
