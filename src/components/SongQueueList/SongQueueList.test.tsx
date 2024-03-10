import { render, screen } from '@testing-library/react'
import SongQueueList from '.'

const mockSongs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', audio: 'song1.mp3' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', audio: 'song2.mp3' },
]

const mockSongQueue = [1, 2]

describe('SongQueueList', () => {
  test('renders SongQueueList component with "now playing" text hidden', () => {
    render(
      <SongQueueList
        songs={mockSongs}
        songQueue={mockSongQueue}
        isPlaying={false}
      />
    )

    const headerElement = screen.getByText('Song Queue')
    expect(headerElement).toBeInTheDocument()

    const nowPlayingText = screen.getByText('now playing')
    expect(nowPlayingText).toBeInTheDocument()
    expect(nowPlayingText).toHaveClass('opacity-0')

    const songCards = screen.getAllByLabelText(/song-card/i)
    expect(songCards).toHaveLength(mockSongQueue.length)
  })
  test('should show now playing if isPlaying is true', () => {
    render(
      <SongQueueList
        songs={mockSongs}
        songQueue={mockSongQueue}
        isPlaying={true}
      />
    )

    const nowPlayingText = screen.getByText('now playing')
    expect(nowPlayingText).toBeInTheDocument()
    expect(nowPlayingText).toHaveClass('opacity-100')
  })
})
