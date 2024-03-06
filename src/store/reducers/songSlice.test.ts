// songSlice.test.ts
import songReducer, { selectNextSong, SongState } from './songSlice'

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
})
