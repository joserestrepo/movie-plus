import { render, screen } from '@testing-library/react'
import Loader from './Loader'

describe('Loader', () => {
  test('renders Loader correctly', () => {
    render(<Loader />)

    const loaderContainer = screen.getByTestId('loader-container')
    expect(loaderContainer).toBeInTheDocument()

    const loaderElement = screen.getByTestId('loader-element')
    expect(loaderElement).toBeInTheDocument()
  })
})
