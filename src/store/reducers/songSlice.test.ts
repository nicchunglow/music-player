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
    currentSongId: 0,
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
      currentSongId: 0,
      isPlaying: false,
      isShuffled: false,
    }
    const state = songReducer(initialState, selectNextSong())
    const newList = songIdList.slice(1)
    expect(state.currentSongId).toEqual(1)
    expect(state.songQueue).toEqual(newList)
    expect(state.previousSongQueue).toEqual([0])
  })

  it('should handle selectPreviousSong', () => {
    const initialState: SongState = {
      songQueue: songIdList,
      previousSongQueue: [],
      currentSongId: 1,
      isPlaying: false,
      isShuffled: false,
    }
    const state = songReducer(initialState, selectPreviousSong())

    expect(state.currentSongId).toEqual(0)
  })
  it('should handle selectPreviousSong, assuming there was previousSongQueue', () => {
    const initialState: SongState = {
      songQueue: songIdList,
      previousSongQueue: [0, 1],
      currentSongId: 1,
      isPlaying: false,
      isShuffled: false,
    }
    const state = songReducer(initialState, selectPreviousSong())

    expect(state.currentSongId).toEqual(1)
  })
  it('should handle isPlaying', () => {
    const state = songReducer(initialState, togglePlaying())

    expect(state.isPlaying).not.toEqual(initialState.isPlaying)
  })
  describe('Shuffle', () => {
    it('should handle isShuffled, with first song not changing', () => {
      const state = songReducer(initialState, toggleShuffle())

      expect(state.isShuffled).not.toEqual(initialState.isShuffled)
      expect(state.songQueue[0]).toEqual(initialState.currentSongId)
      expect(state.currentSongId).toEqual(initialState.currentSongId)
    })
    describe('Unshuffle', () => {
      it('return a shuffled queue to the original queue, with the current song being the new starting point  ', () => {
        const initialState: SongState = {
          songQueue: [8, 2, 5],
          previousSongQueue: [],
          currentSongId: 8,
          isPlaying: false,
          isShuffled: true,
        }
        const state = songReducer(initialState, toggleShuffle())

        expect(state.isShuffled).not.toEqual(initialState.isShuffled)
        expect(state.songQueue).toEqual([8, 9])
      })
      //start at different index, shuffle, next song, unshuffle, go to list with the song's index.

      // it('should return new list when unshuffled after being shuffled and choose next song.', () => {
      //   const state = songReducer(initialState, toggleShuffle())

      //   expect(state.isShuffled).not.toEqual(initialState.isShuffled)
      //   expect(state.songQueue[0]).toEqual(initialState.currentSongId)
      //   expect(state.currentSongId).toEqual(initialState.currentSongId)
      // })
    })
  })
})
