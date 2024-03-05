import App from '.'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })
  it('renders', () => {
    const element = screen.getByText('Hello')
    expect(element).toBeInTheDocument()
  })
})
