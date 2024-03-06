import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import ButtonComponent from './Button'

describe('ButtonComponent', () => {
  test('renders button with title', () => {
    const { getByText } = render(<ButtonComponent title="Click me" />)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  test('calls click handler when button is clicked', () => {
    const mockClickHandler = jest.fn()
    const { getByText } = render(
      <ButtonComponent title="Click me" click={mockClickHandler} />,
    )

    const buttonElement = getByText('Click me')
    fireEvent.click(buttonElement)

    expect(mockClickHandler).toHaveBeenCalledTimes(1)
  })

  test('renders button with default type "button"', () => {
    const { getByText } = render(<ButtonComponent title="Click me" />)
    const buttonElement = getByText('Click me')
    expect(buttonElement).toHaveAttribute('type', 'button')
  })

  test('renders button with specified type', () => {
    const { getByText } = render(
      <ButtonComponent title="Submit" type="submit" />,
    )
    const buttonElement = getByText('Submit')
    expect(buttonElement).toHaveAttribute('type', 'submit')
  })
})
