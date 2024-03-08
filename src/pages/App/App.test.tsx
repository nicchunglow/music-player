import App from '.'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { RootState } from '@/store/reducers'
import { songIdList } from '@/helper'

const mockStore = configureMockStore<RootState>()

describe('App', () => {
  const initialState: RootState = {
    songs: {
      songQueue: songIdList,
      previousSongQueue: [],
      currentSongIndex: 0,
      isPlaying: false,
    },
  }
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
