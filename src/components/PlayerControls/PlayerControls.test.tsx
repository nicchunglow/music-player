import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import PlayerControl from '.'
import { RootState } from '@/store/reducers'
import { selectPreviousSong } from '@/store/reducers/songSlice'

const audioMock = {
  play: jest.fn(),
  pause: jest.fn(),
  currentTime: 0,
}

const mockStore = configureMockStore<RootState>()
const initialState: RootState = {
  songs: {
    songQueue: [0, 1, 2, 3],
    currentSongIndex: 0,
  },
}

describe('PlayerControls', () => {
  const store = mockStore(initialState)
  beforeEach(() => {
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
  test('should have audioMock.pause called and dispatch selectPreviousSong after clicking next', () => {
    const nextButton = screen.getByAltText('back')
    fireEvent.click(nextButton)

    expect(audioMock.pause).toHaveBeenCalledTimes(1)
    expect(audioMock.play).not.toHaveBeenCalled()
  })
  test('should have audioMock.pause called and dispatch selectPreviousSong after clicking back when currentTime is less than 3', () => {
    audioMock.currentTime = 2
    const backButton = screen.getByAltText('back')

    fireEvent.click(backButton)

    expect(audioMock.pause).toHaveBeenCalledTimes(1)
    expect(audioMock.play).not.toHaveBeenCalled()
    waitFor(() => {
      expect(audioMock.currentTime).toEqual(0)
      expect(store.getActions()).toEqual([selectPreviousSong()])
    })
  })
  test('should have audioMock.play called and reset currentTime after clicking back when currentTime is greater than or equal to 3', () => {
    audioMock.currentTime = 4
    const backButton = screen.getByAltText('back')
    fireEvent.click(backButton)

    expect(audioMock.play).toHaveBeenCalledTimes(1)
    waitFor(() => {
      expect(audioMock.currentTime).toEqual(0)
      expect(store.getActions()).toEqual([])
    })
  })
})
