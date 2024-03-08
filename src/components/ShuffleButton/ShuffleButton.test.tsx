import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import ShuffleButton from '.'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}))

const mockStore = configureMockStore()

describe('ShuffleButton', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    const initialState = {
      songs: {
        songQueue: [0, 1],
        previousSongQueue: [],
        currentSongId: 0,
        isPlaying: false,
        isShuffled: false,
      },
    }

    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <ShuffleButton />
      </Provider>
    )
  })

  test('should render', () => {
    const shuffleButton = screen.getByLabelText('shuffle-button')
    expect(shuffleButton).toBeInTheDocument()
  })
})
