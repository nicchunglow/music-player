import App from './App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders Summary', () => {
    render(<App />)
    const Summary = screen.getByLabelText('summary')
    expect(Summary).toBeInTheDocument()
  })
})
