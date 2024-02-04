import App from './App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })
  it('renders Summary', () => {
    const Summary = screen.getByLabelText('summary')
    expect(Summary).toBeInTheDocument()
  })
  it('renders Search History Title', () => {
    const HistoryList = screen.getByLabelText('history-list')
    expect(HistoryList).toBeInTheDocument()
  })
  it('renders Search Input', () => {
    const SearchInput = screen.getByRole('textbox', {
      name: 'search-input',
    })
    expect(SearchInput).toBeInTheDocument()
  })
})
