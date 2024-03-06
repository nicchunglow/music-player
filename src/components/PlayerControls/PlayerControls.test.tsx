import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import PlayerControl from '.'
import { RootState } from '@/store/reducers'

const audioMock = {
  play: jest.fn(),
  pause: jest.fn(),
}

const mockStore = configureMockStore<RootState>()
const initialState: RootState = {
  songs: {
    songQueue: [0, 1, 2, 3],
    currentSongIndex: 0,
  },
}

describe('PlayerControls', () => {
  beforeEach(() => {
    const store = mockStore(initialState)
    render(
      <Provider store={store}>
        <PlayerControl audio={audioMock} />
      </Provider>
    )
  })
  afterEach(() => {
    jest.resetAllMocks()
  })
  test('renders player controls', () => {
    const backButton = screen.getByAltText('back')
    const playButton = screen.getByAltText('play')
    const nextButton = screen.getByAltText('next')

    expect(backButton).toBeInTheDocument()
    expect(playButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  test('should have audioMock.play called after clicking play', () => {
    const playingButton = screen.getByAltText('play')
    fireEvent.click(playingButton)

    expect(audioMock.play).toHaveBeenCalledTimes(1)
    expect(audioMock.pause).not.toHaveBeenCalled()
  })
  test('should have audioMock.pause called after clicking pause, after it was played', () => {
    const playingButton = screen.getByAltText('play')

    fireEvent.click(playingButton)

    expect(playingButton).toHaveAttribute('alt', 'pause')

    fireEvent.click(playingButton)

    expect(audioMock.play).toHaveBeenCalledTimes(1)
    expect(audioMock.pause).toHaveBeenCalledTimes(1)
  })
  test('should have audioMock.pause called and dispatch selectNextSong after clicking next', () => {
    const nextButton = screen.getByAltText('next')
    fireEvent.click(nextButton)

    expect(audioMock.pause).toHaveBeenCalledTimes(1)
    expect(audioMock.play).not.toHaveBeenCalled()
  })
})
