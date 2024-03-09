import { songIdList } from '@/helper'
import { createSlice } from '@reduxjs/toolkit'

export type SongState = {
  songQueue: number[]
  previousSongQueue: number[]
  currentSongId: number
  isPlaying: boolean
  isShuffled: boolean
}

const initialState: SongState = {
  songQueue: songIdList,
  previousSongQueue: [],
  currentSongId: songIdList[0],
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
      state.currentSongId = state.songQueue[0]
    },
    selectPreviousSong: (state) => {
      const song = state.previousSongQueue.pop()
      if (song !== undefined) {
        state.songQueue.unshift(song)
      }
      state.currentSongId = state.songQueue[0]
    },
    togglePlaying: (state) => {
      state.isPlaying = !state.isPlaying
    },
    toggleShuffle: (state) => {
      state.isShuffled = !state.isShuffled
      const shuffleQueue = (array) => {
        let currentIndex = array.length

        while (currentIndex > 0) {
          const randomIndex = Math.floor(Math.random() * currentIndex)
          currentIndex--
          ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
          ]
        }

        return array
      }
      const currentSong = state.songQueue.shift()
      if (state.isShuffled) {
        const newOrder = shuffleQueue(state.songQueue)
        newOrder.unshift(currentSong)
        state.songQueue = newOrder
        state.currentSongId = state.songQueue[0]
      } else {
        if (currentSong !== undefined) {
          state.songQueue = songIdList.slice(songIdList.indexOf(currentSong))
        }
      }
    },
  },
})

export const {
  selectNextSong,
  selectPreviousSong,
  togglePlaying,
  toggleShuffle,
} = songSlice.actions

export default songSlice.reducer
