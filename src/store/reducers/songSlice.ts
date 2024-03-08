import { songIdList } from '@/helper'
import { createSlice } from '@reduxjs/toolkit'

export type SongState = {
  songQueue: number[]
  previousSongQueue: number[]
  currentSongIndex: number
  isPlaying: boolean
  isShuffled: boolean
}

const initialState: SongState = {
  songQueue: songIdList,
  previousSongQueue: [],
  currentSongIndex: songIdList[0],
  isPlaying: false,
  isShuffled: false,
}

const songSlice = createSlice({
  name: 'songSlice',
  initialState,
  reducers: {
    selectNextSong: (state) => {
      const song = state.songQueue.shift()
      if (song !== undefined) {
        state.previousSongQueue.push(song)
      }
      state.currentSongIndex = state.songQueue[0]
    },
    selectPreviousSong: (state) => {
      const song = state.previousSongQueue.pop()
      if (song !== undefined) {
        state.songQueue.unshift(song)
      }
      state.currentSongIndex = state.songQueue[0]
    },
    setIsPlaying: (state) => {
      state.isPlaying = !state.isPlaying
    },
    isShuffled: (state) => {
      state.isShuffled = !state.isShuffled
    },
  },
})

export const { selectNextSong, selectPreviousSong, setIsPlaying } =
  songSlice.actions
export default songSlice.reducer
