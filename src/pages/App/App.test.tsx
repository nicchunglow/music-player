import App from '.'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { RootState } from '@/store/reducers'

jest.mock('../../assets/music', () => '../../assets/music')

const mockStore = configureMockStore<RootState>()
const initialState: RootState = {
  songs: {
    songQueue: [0, 1, 2, 3],
    currentSongIndex: 0,
  },
}

describe('App', () => {
  it('renders', () => {
    const store = mockStore(initialState)

    render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    const player = screen.getByLabelText('player')
    expect(player).toBeInTheDocument()
  })
})
