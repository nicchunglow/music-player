import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import RepeatButton from '.'

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}))

const mockStore = configureMockStore()

describe('RepeatButton', () => {
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
        <RepeatButton />
      </Provider>
    )
  })

  test('should render', () => {
    const repeatButton = screen.getByLabelText('repeat-button')
    expect(repeatButton).toBeInTheDocument()
  })
})
