import { render, screen, fireEvent } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import PlayerControl from '.'
import {
  selectNextSong,
  selectPreviousSong,
  togglePlaying,
  toggleShuffle,
} from '@/store/reducers/songSlice'

const mockStore = configureStore()

describe('PlayerControl', () => {
  let store
  let audioRefMock

  beforeEach(() => {
    store = mockStore({
      songs: {
        isShuffled: false,
      },
    })

    audioRefMock = {
      current: {
        pause: jest.fn(),
        play: jest.fn(),
        currentTime: 0,
      },
    }
    render(
      <Provider store={store}>
        <PlayerControl audioRef={audioRefMock} />
      </Provider>
    )
  })

  it('renders PlayerControl component', () => {
    expect(screen.getByLabelText('player-controls')).toBeInTheDocument()
  })

  it('dispatches togglePlaying action when play/pause button is clicked', () => {
    fireEvent.click(screen.getByAltText('play'))

    expect(store.getActions()).toContainEqual(togglePlaying())
  })

  it('dispatches selectPreviousSong action when back button is clicked', () => {
    fireEvent.click(screen.getByAltText('back'))

    expect(store.getActions()).toContainEqual(selectPreviousSong())
  })

  it('dispatches selectNextSong action when next button is clicked', () => {
    fireEvent.click(screen.getByAltText('next'))

    expect(store.getActions()).toContainEqual(selectNextSong())
  })
  it('dispatches toggleShuffle action when shuffle button is clicked', () => {
    fireEvent.click(screen.getByAltText('shuffle'))

    expect(store.getActions()).toContainEqual(toggleShuffle())
  })
})
