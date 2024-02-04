import Search from './index'
import { render, screen } from '@testing-library/react'

describe('Search', () => {
  it('renders', () => {
    const props = {
      placeholder: 'Country',
      onChange: jest.mock,
    }
    render(<Search {...props} />)
    const SearchInput = screen.getByRole('textbox', {
      name: 'search-input',
    })

    expect(SearchInput).toBeInTheDocument()
    expect(SearchInput).toHaveAttribute('placeholder', 'Country')
  })
})
