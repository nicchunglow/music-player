import { songIdList } from '@/helper'
import songReducer, {
  toggleShuffle,
  selectNextSong,
  selectPreviousSong,
  SongState,
  togglePlaying,
} from './songSlice'

describe('songSlice', () => {
  const initialState: SongState = {
    songQueue: songIdList,
    previousSongQueue: [],
    currentSongIndex: 0,
    isPlaying: false,
    isShuffled: false,
  }

  it('should return the initial state', () => {
    expect(songReducer(undefined, { type: 'unknown' })).toEqual(initialState)
  })

  it('should handle selectNextSong', () => {
    const initialState: SongState = {
      songQueue: songIdList,
      previousSongQueue: [],
      currentSongIndex: 0,
      isPlaying: false,
      isShuffled: false,
    }
    const state = songReducer(initialState, selectNextSong())
    const newList = songIdList.slice(1)
    expect(state.currentSongIndex).toEqual(1)
    expect(state.songQueue).toEqual(newList)
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
  it('should handle isPlaying', () => {
    const state = songReducer(initialState, togglePlaying())

    expect(state.isPlaying).not.toEqual(initialState.isPlaying)
  })
  describe('Shuffle', () => {
    it('should handle isShuffled', () => {
      const state = songReducer(initialState, toggleShuffle())

      expect(state.isShuffled).not.toEqual(initialState.isShuffled)
    })
    it('should have the playing song changed', () => {
      const state = songReducer(initialState, toggleShuffle())
      expect(state.currentSongIndex).not.toEqual(initialState.currentSongIndex)
    })
  })
})
