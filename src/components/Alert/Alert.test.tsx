import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import AlertComponent from '@components/Alert/Alert'

describe('AlertComponent', () => {
  test('renderiza correctamente con el texto proporcionado', () => {
    const text = 'Este es un mensaje de alerta'
    const { getByText } = render(<AlertComponent text={text} />)
    const alertElement = getByText(text)
    expect(alertElement).toBeInTheDocument()
  })
})
