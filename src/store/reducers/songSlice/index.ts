import { songIdList } from '../../../helper'
import { createSlice } from '@reduxjs/toolkit'
import { isArrayDifferent, shuffleList } from '@/helper/shuffle'

export type SongState = {
  songQueue: number[]
  previousSongQueue: number[]
  currentSongId: number
  isPlaying: boolean
  isShuffled: boolean
}

const shuffledList = shuffleList(songIdList)

const initialState: SongState = {
  songQueue: shuffledList,
  previousSongQueue: [],
  currentSongId: shuffledList[0],
  isPlaying: false,
  isShuffled: true,
}

const songSlice = createSlice({
  name: 'songSlice',
  initialState,
  reducers: {
    selectNextSong: (state) => {
      const song = state.songQueue.shift()
      if (state.songQueue.length === 0) {
        if (state.isShuffled) {
          let shuffledList = shuffleList(songIdList)

          while (
            !shuffledList ||
            !isArrayDifferent(state.previousSongQueue, shuffledList)
          ) {
            shuffledList = shuffleList(songIdList)
          }

          state.songQueue = shuffledList
        } else {
          state.songQueue = songIdList
        }
      }
      if (song !== undefined) {
        state.previousSongQueue.push(song)
      }
      state.currentSongId = state.songQueue[0]
    },
    selectSong: (state, action) => {
      const filterList = state.songQueue.filter(
        (song) => song !== action.payload
      )
      filterList.unshift(action.payload)
      state.songQueue = filterList
      state.currentSongId = action.payload
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

      const currentSong = state.songQueue.shift()
      if (state.isShuffled) {
        const newOrder = shuffleList(state.songQueue)
        if (currentSong !== undefined) {
          newOrder.unshift(currentSong)
        }
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
  selectSong,
  selectNextSong,
  selectPreviousSong,
  togglePlaying,
  toggleShuffle,
} = songSlice.actions

export default songSlice.reducer
