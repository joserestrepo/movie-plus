import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import LoginComponent from './Login'

const mockStore = configureStore()

describe('LoginComponent', () => {
  it('renders login form correctly', async () => {
    const initialState = {
      auth: {
        loading: false,
        isSuccess: false,
        inValid: false,
        error: null,
      },
    }

    const store = mockStore(initialState)

    render(
      <Router>
        <Provider store={store}>
          <LoginComponent />
        </Provider>
      </Router>,
    )

    expect(screen.getByText('Inicia sesión')).toBeInTheDocument()

    fireEvent.submit(screen.getByTestId('form'))
  })
})
