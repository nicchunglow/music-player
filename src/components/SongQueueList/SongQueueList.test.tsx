import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import SongQueueList from '.'

const mockStore = configureMockStore()

const mockSongs = [
  { id: 1, title: 'Song 1', artist: 'Artist 1', audio: 'song1.mp3' },
  { id: 2, title: 'Song 2', artist: 'Artist 2', audio: 'song2.mp3' },
]

const mockSongQueue = [1, 2]

describe('SongQueueList', () => {
  const initialState = {
    songs: {
      songQueue: [0, 1, 2],
      previousSongQueue: [],
      currentSongId: 0,
      isPlaying: false,
      isShuffled: false,
    },
  }
  const store = mockStore(initialState)

  test('renders SongQueueList component with "now playing" text hidden', () => {
    render(
      <Provider store={store}>
        <SongQueueList
          songs={mockSongs}
          songQueue={mockSongQueue}
          isPlaying={false}
        />
      </Provider>
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
      <Provider store={store}>
        <SongQueueList
          songs={mockSongs}
          songQueue={mockSongQueue}
          isPlaying={true}
        />
      </Provider>
    )

    const nowPlayingText = screen.getByText('now playing')
    expect(nowPlayingText).toBeInTheDocument()
    expect(nowPlayingText).toHaveClass('opacity-100')
  })
})
