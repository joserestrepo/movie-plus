import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import CardBackdropComponent from './CardBackdrop'

const mockMovie = {
  backdrop_path: '/example-backdrop.jpg',
  title: 'Ejemplo de Título',
  overview: 'Ejemplo de descripción de la película.',
}

describe('CardBackdropComponent', () => {
  test('renderiza correctamente con la información de la película', () => {
    const { getByText, getByAltText } = render(
      <CardBackdropComponent movie={mockMovie} />,
    )

    const backdropImage = getByAltText('')
    expect(backdropImage).toBeInTheDocument()
    expect(backdropImage).toHaveAttribute(
      'src',
      `https://mocked-url-images.com${mockMovie.backdrop_path}`,
    )

    const titleElement = getByText(mockMovie.title)
    const overviewElement = getByText(mockMovie.overview)
    expect(titleElement).toBeInTheDocument()
    expect(overviewElement).toBeInTheDocument()
  })
})
