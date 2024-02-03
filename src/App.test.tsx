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
    const HistoryTitle = screen.getByRole('heading', {
      name: 'history-title',
    })
    expect(HistoryTitle).toBeInTheDocument()
  })
  it('renders history items by testing if it has first of the item', () => {
    const FirstHistoryItem = screen.getByLabelText('history-item-0')
    expect(FirstHistoryItem).toBeInTheDocument()
  })
})
