import { render, screen } from '@testing-library/react'
import Player from '.'

const mockSelectedSong = {
  artist: 'Test Artist',
  audio: 'path/to/test-song.mp3',
  title: 'Test Song',
}

describe('Player', () => {
  test('renders Player component with selected song information', () => {
    render(<Player selectedSong={mockSelectedSong} />)

    const titleElement = screen.getByText('Test Song')
    const artistElement = screen.getByText('Test Artist')
    const playerControlsElement = screen.getByLabelText('player-controls')

    expect(titleElement).toBeInTheDocument()
    expect(artistElement).toBeInTheDocument()
    expect(playerControlsElement).toBeInTheDocument()
  })
})
