import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import SongQueueCard from '.'

const mockStore = configureMockStore()

describe('SongQueueCard', () => {
  const sampleProps = {
    title: 'Sample Title',
    artist: 'Sample Artist',
    id: 1,
  }

  const initialState = {
    songs: {
      songQueue: [0, 1, 2],
      previousSongQueue: [],
      currentSongId: 0,
      isPlaying: false,
      isShuffled: false,
    },
  }
  const store = mockStore(initialState)
  test('renders title and artist', () => {
    render(
      <Provider store={store}>
        <SongQueueCard {...sampleProps} />
      </Provider>
    )

    const cardElement = screen.getByLabelText(`${sampleProps.id}-song-card`)
    const titleElement = screen.getByText(sampleProps.title)
    const artistElement = screen.getByText(sampleProps.artist)

    expect(cardElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
    expect(artistElement).toBeInTheDocument()
  })
})
