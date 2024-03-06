import App from '.'
import { render, screen } from '@testing-library/react'

jest.mock('../../assets/music', () => '../../assets/music')

describe('App', () => {
  beforeEach(() => {
    render(<App />)
  })
  it('renders', () => {
    const player = screen.getByLabelText('player')
    expect(player).toBeInTheDocument()
  })
})
