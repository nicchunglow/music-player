import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import Player from '.'
import { songIdList } from '@/helper'
import { selectNextSong } from '@/store/reducers/songSlice'

const mockSelectedSong = {
  artist: 'Test Artist',
  audio: jest.mock,
  title: 'Test Song',
  img: '',
  id: '',
}

const mockStore = configureMockStore()

describe('Player', () => {
  const initialState = {
    songs: {
      songQueue: songIdList,
      previousSongQueue: [],
      currentSongId: 0,
      isPlaying: false,
      isShuffled: false,
    },
  }
  const store = mockStore(initialState)
  test('should render Player component with selected song information', async () => {
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

  test('should render Player even with no image available', async () => {
    render(
      <Provider store={store}>
        <Player selectedSong={mockSelectedSong} />
      </Provider>
    )
    const noImage = screen.getByText('No Artist Image available')

    expect(noImage).toBeInTheDocument()
  })

  test('should dispatch selectNextSong when audio ends', async () => {
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

  test('should have audio pause is false when isPlaying is true', () => {
    const initialState = {
      songs: {
        songQueue: songIdList,
        previousSongQueue: [],
        currentSongId: 0,
        isPlaying: false,
        isShuffled: false,
      },
    }
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <Player selectedSong={mockSelectedSong} />
      </Provider>
    )
    const audio: HTMLAudioElement = screen.getByLabelText('audio-element')
    expect(audio.paused).toBe(true)
  })
  test('should have audio pauses when isPlaying is false', () => {
    render(
      <Provider store={store}>
        <Player selectedSong={mockSelectedSong} />
      </Provider>
    )
    const audio: HTMLAudioElement = screen.getByLabelText('audio-element')
    expect(audio.paused).toBe(true)
  })
})
