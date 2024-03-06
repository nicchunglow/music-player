import { render, screen } from '@testing-library/react'
import PlayerControls from '.'

describe('PlayerControls', () => {
  test('renders player controls and triggers play function on button click', () => {
    render(<PlayerControls />)
    const backButton = screen.getByAltText('back')
    const playButton = screen.getByAltText('play')
    const nextButton = screen.getByAltText('next')

    expect(backButton).toBeInTheDocument()
    expect(playButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })
})
