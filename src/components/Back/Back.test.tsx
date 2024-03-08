import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import BackComponent from './Back'

describe('BackComponent', () => {
  test('navega hacia atrás al hacer clic', () => {
    const { getByText } = render(<BackComponent />)
    const backButton = getByText('Atrás')

    fireEvent.click(backButton)

    expect(mockNavigate).toHaveBeenCalledWith(-1)
  })
})

const mockNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate,
}))
