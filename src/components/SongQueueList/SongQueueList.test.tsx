import { render, screen } from '@testing-library/react'
import SongQueueList from '.'

const mockSongs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', audio: 'song1.mp3' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', audio: 'song2.mp3' },
]

const mockSongQueue = [1, 2]

test('renders SongQueueList component', () => {
  render(<SongQueueList songs={mockSongs} songQueue={mockSongQueue} />)

  const headerElement = screen.getByText('Song Queue')
  expect(headerElement).toBeInTheDocument()

  const songCards = screen.getAllByLabelText(/-song-card/i)
  expect(songCards).toHaveLength(mockSongQueue.length)
})
