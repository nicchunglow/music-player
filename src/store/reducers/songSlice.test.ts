import { songIdList } from '@/helper'
import songReducer, {
  isShuffled,
  selectNextSong,
  selectPreviousSong,
  SongState,
} from './songSlice'

describe('songSlice', () => {
  const initialState: SongState = {
    songQueue: [0, 1, 2, 3, 4, 5],
    previousSongQueue: [],
    currentSongIndex: 0,
    isPlaying: false,
    isShuffled: false,
  }

  it('should return the initial state', () => {
    expect(songReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle selectNextSong', () => {
    const state = songReducer(initialState, selectNextSong())

    expect(state.currentSongIndex).toEqual(1)
    expect(state.songQueue).toEqual([1, 2, 3, 4, 5])
    expect(state.previousSongQueue).toEqual([0])
  })
  it('should handle selectPreviousSong', () => {
    const initialState: SongState = {
      songQueue: songIdList,
      previousSongQueue: [],
      currentSongIndex: 1,
      isPlaying: false,
      isShuffled: false,
    }
    const state = songReducer(initialState, selectPreviousSong())

    expect(state.currentSongIndex).toEqual(0)
  })
  it('should handle selectPreviousSong, assuming there was previousSongQueue', () => {
    const initialState: SongState = {
      songQueue: songIdList,
      previousSongQueue: [0, 1],
      currentSongIndex: 2,
      isPlaying: false,
      isShuffled: false,
    }
    const state = songReducer(initialState, selectPreviousSong())

    expect(state.currentSongIndex).toEqual(1)
  })
  it('should handle isShuffled', () => {
    const state = songReducer(initialState, isShuffled())

    expect(state.isShuffled).toEqual(!initialState.isShuffled)
  })
})
