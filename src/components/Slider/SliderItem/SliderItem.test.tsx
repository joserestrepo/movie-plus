import { render, screen } from '@testing-library/react'
import SliderItemComponent from './SliderItem'
import { envs } from '@config/envs'

describe('SliderItemComponent', () => {
  const mockMovie = {
    backdrop_path: '/example.jpg',
  }

  test('renders SliderItemComponent correctly', () => {
    render(<SliderItemComponent movie={mockMovie} />)

    const imageElement = screen.getByAltText('image')
    expect(imageElement).toBeInTheDocument()
  })

  test('displays the correct image source', () => {
    render(<SliderItemComponent movie={mockMovie} />)

    const imageElement = screen.getByAltText('image')
    expect(imageElement).toHaveAttribute(
      'src',
      `${envs.url_images}${mockMovie.backdrop_path}`,
    )
  })
})
