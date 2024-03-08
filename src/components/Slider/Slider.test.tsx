import { render, screen, fireEvent } from '@testing-library/react'
import SliderComponent from './Slider'

describe('SliderComponent', () => {
  const mockMovies = [
    {
      backdrop_path: '/example1.jpg',
    },
    {
      backdrop_path: '/example2.jpg',
    },
  ]

  test('renders SliderComponent correctly', () => {
    render(<SliderComponent movies={mockMovies} />)
    const sliderComponent = screen.getByTestId('sliderComponent')
    expect(sliderComponent).toBeInTheDocument()
  })

  test('allows scrolling to the right', () => {
    render(<SliderComponent movies={mockMovies} />)

    const rightChevron = screen.getByTestId('chevronRight')
    fireEvent.click(rightChevron)

    const sliderElement = screen.getByTestId('sliderElement')
    expect(sliderElement.scrollLeft).toBeGreaterThan(-110)
  })

  test('allows scrolling to the left', () => {
    render(<SliderComponent movies={mockMovies} />)

    const leftChevron = screen.getByTestId('chevronLeft')
    fireEvent.click(leftChevron)

    const sliderElement = screen.getByTestId('sliderElement')
    expect(sliderElement.scrollLeft).toBeLessThan(110)
  })
})
