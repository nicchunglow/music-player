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
  it('renders Search History', () => {
    const HistoryTitle = screen.getByRole('heading', {
      name: 'history-title',
    })
    expect(HistoryTitle).toBeInTheDocument()
  })
})
