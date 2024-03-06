import { createSlice } from '@reduxjs/toolkit'

export type SongState = {
  songQueue: number[]
  currentSongIndex: number
}

const initialState: SongState = {
  songQueue: [0, 1, 2, 3],
  currentSongIndex: 0,
}

const songSlice = createSlice({
  name: 'songSlice',
  initialState,
  reducers: {
    selectNextSong: (state) => {
      state.currentSongIndex =
        (state.currentSongIndex + 1) % state.songQueue.length
    },
    selectPreviousSong: (state) => {
      if (state.currentSongIndex === 0) {
        state.currentSongIndex = state.songQueue.length - 1
      } else {
        state.currentSongIndex =
          (state.currentSongIndex - 1) % state.songQueue.length
      }
    },
  },
})

export const { selectNextSong, selectPreviousSong } = songSlice.actions
export default songSlice.reducer
