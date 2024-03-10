import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Player from '.'
import { songIdList } from '@/helper'
import { selectNextSong } from '@/store/reducers/songSlice'

const mockSelectedSong = {
  artist: 'Test Artist',
  audio: 'path/to/test-song.mp3',
  title: 'Test Song',
  img: '',
  id: '',
}

const mockStore = configureMockStore()
const initialState = {
  songs: {
    songQueue: songIdList,
    previousSongQueue: [],
    currentSongId: 0,
    isPlaying: false,
    isShuffled: false,
  },
}

describe('Player', () => {
  test('renders Player component with selected song information', async () => {
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <Player selectedSong={mockSelectedSong} />
      </Provider>
    )

    const titleElement = screen.getByText('Test Song')
    const artistElement = screen.getByText('Test Artist')
    const playerControlsElement = screen.getByLabelText('player-controls')

    expect(titleElement).toBeInTheDocument()
    expect(artistElement).toBeInTheDocument()
    expect(playerControlsElement).toBeInTheDocument()
  })

  test('renders Player even with no image available', async () => {
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <Player selectedSong={mockSelectedSong} />
      </Provider>
    )

    const noImage = screen.getByText('No Artist Image available')

    expect(noImage).toBeInTheDocument()
  })

  test('dispatches selectNextSong when audio ends', async () => {
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <Player selectedSong={mockSelectedSong} />
      </Provider>
    )

    fireEvent.ended(screen.getByLabelText('audio-element'))

    await waitFor(() => {
      expect(store.getActions()).toContainEqual(selectNextSong())
    })
  })
})
