import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import Player from '.'
import { RootState } from '@/store/reducers'

const mockSelectedSong = {
  artist: 'Test Artist',
  audio: 'path/to/test-song.mp3',
  title: 'Test Song',
}

const mockStore = configureMockStore<RootState>()
const initialState: RootState = {
  songs: {
    songQueue: [0, 1, 2, 3],
    currentSongIndex: 0,
    isPlaying: false,
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
})
