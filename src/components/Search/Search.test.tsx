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
  afterEach(() => {
    jest.clearAllTimers()
  })
  it('renders', () => {
    const SearchInput = screen.getByRole('textbox', {
      name: 'search-input',
    })

    expect(SearchInput).toBeInTheDocument()
    expect(SearchInput).toHaveAttribute('placeholder', 'Country')
  })
  it('triggers search by clicking the button', () => {
    const SearchInput = screen.getByRole('textbox', {
      name: 'search-input',
    })
    const SearchButton = screen.getByRole('button', {
      name: 'country-search-button',
    })

    expect(SearchButton).toBeInTheDocument()

    fireEvent.change(SearchInput, { target: { value: 'United' } })

    fireEvent.click(SearchButton)

    expect(props.onChange).toHaveBeenCalledWith('United')
  })
})
