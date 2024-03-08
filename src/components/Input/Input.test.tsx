import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import InputComponent from './Input'

describe('InputComponent', () => {
  const mockProps = {
    title: 'Test Input',
    type: 'text',
    handleChange: jest.fn(),
    placeholder: 'Enter text',
    name: 'testInput',
    value: '',
    textError: 'Invalid input',
    inValid: false,
  }

  test('renders InputComponent correctly', () => {
    render(<InputComponent {...mockProps} />)
    expect(screen.getByText('Test Input')).toBeInTheDocument()

    const inputElement = screen.getByPlaceholderText('Enter text')
    expect(inputElement).toBeInTheDocument()
    expect(inputElement).toHaveAttribute('type', 'text')

    expect(screen.queryByText('Invalid input')).not.toBeInTheDocument()
  })

  test('displays error message when inValid is true', () => {
    render(<InputComponent {...mockProps} inValid={true} />)
    expect(screen.getByText('Invalid input')).toBeInTheDocument()
  })
})
