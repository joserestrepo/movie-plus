import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import ContentCategoryComponent from './ContentCategory'

jest.mock('@hooks/useAsync')
jest.mock('@service/movies.service')

describe('ContentCategoryComponent', () => {
  const mockProps = {
    title: 'Test Category',
    url: '/test-category',
    queryParams: { page: 1 },
  }

  test('renders ContentCategoryComponent correctly', async () => {
    render(<ContentCategoryComponent {...mockProps} />)

    expect(screen.getByText('Test Category')).toBeInTheDocument()
  })
})
