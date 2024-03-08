import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import PlayerControl from '.'
import { RootState } from '@/store/reducers'

const audioMock = {
  current: {
    play: jest.fn(() => {}),
    pause: jest.fn(() => {}),
    currentTime: 0,
  },
}

const mockStore = configureMockStore<RootState>()
const initialState: RootState = {
  songs: {
    songQueue: [0, 1, 2, 3],
    previousSongQueue: [],
    currentSongIndex: 0,
    isPlaying: false,
  },
}

describe('PlayerControls', () => {
  const store = mockStore(initialState)
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PlayerControl audioRef={audioMock} isPlaying={false} />
      </Provider>
    )
  })
  afterEach(() => {
    jest.resetAllMocks()
  })
  test.only('renders player controls', () => {
    const backButton = screen.getByAltText('back')
    const playButton = screen.getByAltText('play')
    const nextButton = screen.getByAltText('next')

    expect(backButton).toBeInTheDocument()
    expect(playButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  test('should have audioMock.play called after clicking play', () => {
    const playButton = screen.getByAltText('play')
    fireEvent.click(playButton)

    expect(audioMock.current.play).toHaveBeenCalledTimes(1)
    expect(audioMock.current.pause).not.toHaveBeenCalled()
  })
  test('should have audioMock.pause called after clicking pause, after it was played', () => {
    const playingButton = screen.getByAltText('play')

    fireEvent.click(playingButton)

    expect(playingButton).toHaveAttribute('alt', 'pause')

    fireEvent.click(playingButton)

    expect(audioMock.current.play).toHaveBeenCalledTimes(1)
    expect(audioMock.current.pause).toHaveBeenCalledTimes(1)
  })
  test('should have audioMock.current.pause called and dispatch selectNextSong after clicking next', () => {
    const nextButton = screen.getByAltText('next')
    fireEvent.click(nextButton)

    expect(audioMock.current.pause).toHaveBeenCalledTimes(1)
    expect(audioMock.current.play).not.toHaveBeenCalled()
  })
  test('should have audioMock.current.pause called and dispatch selectPreviousSong after clicking next', () => {
    const nextButton = screen.getByAltText('back')
    fireEvent.click(nextButton)

    expect(audioMock.current.pause).toHaveBeenCalledTimes(1)
    expect(audioMock.current.play).not.toHaveBeenCalled()
  })
})
