// songSlice.test.ts
import songs from '@/assets/music'
import songReducer, {
  selectNextSong,
  selectPreviousSong,
  SongState,
} from './songSlice'

describe('songSlice', () => {
  const songList = songs.map((song) => song.id)
  const initialState: SongState = {
    songQueue: songList,
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
  })
  it('should handle selectPreviousSong', () => {
    const initialState: SongState = {
      songQueue: songList,
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
      songQueue: songList,
      previousSongQueue: [0, 1],
      currentSongIndex: 2,
      isPlaying: false,
      isShuffled: false,
    }
    const state = songReducer(initialState, selectPreviousSong())

    expect(state.currentSongIndex).toEqual(1)
  })
})
