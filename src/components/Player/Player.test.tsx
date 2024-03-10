import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import Player from '.'
import { songIdList } from '@/helper'

const mockSelectedSong = {
  artist: 'Test Artist',
  audio: 'path/to/test-song.mp3',
  title: 'Test Song',
  img: '',
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
  test('renders Player component with selected song information', () => {
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
  test('renders Player even with no image available', () => {
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <Player selectedSong={mockSelectedSong} />
      </Provider>
    )

    const noImage = screen.getByText('No Artist Image available')

    expect(noImage).toBeInTheDocument()
  })
})
