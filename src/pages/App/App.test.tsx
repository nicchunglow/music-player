import App from '.'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import { songIdList } from '@/helper'

const mockStore = configureMockStore()

describe('App', () => {
  const initialState = {
    songs: {
      songQueue: songIdList,
      previousSongQueue: [],
      currentSongId: 0,
      isPlaying: false,
      isShuffled: false,
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
