// songSlice.test.ts
import songReducer, {
  selectNextSong,
  selectPreviousSong,
  SongState,
} from './songSlice'

describe('songSlice', () => {
  it('should return the initial state', () => {
    const initialState: SongState = {
      songQueue: [0, 1, 2, 3],
      currentSongIndex: 0,
    }
    expect(songReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle selectNextSong', () => {
    const initialState: SongState = {
      songQueue: [0, 1, 2, 3],
      currentSongIndex: 0,
    }

    const nextState = songReducer(initialState, selectNextSong())

    expect(nextState.currentSongIndex).toEqual(1)
  })
  it('should handle selectPreviousSong', () => {
    const initialState: SongState = {
      songQueue: [0, 1, 2, 3],
      currentSongIndex: 1,
    }

    const nextState = songReducer(initialState, selectPreviousSong())

    expect(nextState.currentSongIndex).toEqual(0)
  })
  it('should handle selectPreviousSong, going to the last of the queue', () => {
    const initialState: SongState = {
      songQueue: [0, 1, 2, 3],
      currentSongIndex: 0,
    }

    const nextState = songReducer(initialState, selectPreviousSong())

    expect(nextState.currentSongIndex).toEqual(3)
  })
})
