import App from './App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders weather details', async () => {
    render(<App />)
    const Title = screen.getByRole('heading', {
      name: 'title',
    })
    const Temperature = screen.getByRole('heading', {
      name: 'temperature',
    })
    expect(Title).toBeInTheDocument()
    expect(Temperature).toBeInTheDocument()
  })
})
