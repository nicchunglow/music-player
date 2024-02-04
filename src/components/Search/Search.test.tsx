import { render, screen, fireEvent } from '@testing-library/react'
import Search from './index'

jest.useFakeTimers()

describe('Search', () => {
  const props = {
    placeholder: 'Country',
    onChange: jest.fn(),
  }
  beforeEach(() => {
    render(<Search {...props} />)
  })
  it('renders', () => {
    const SearchInput = screen.getByRole('textbox', {
      name: 'search-input',
    })

    expect(SearchInput).toBeInTheDocument()
    expect(SearchInput).toHaveAttribute('placeholder', 'Country')
  })

  it('triggers debounce when typing', async () => {
    const SearchInput = screen.getByRole('textbox', {
      name: 'search-input',
    })

    fireEvent.change(SearchInput, { target: { value: 'United' } })

    jest.runAllTimers()

    expect(props.onChange).toHaveBeenCalledWith('United')
  })
})
