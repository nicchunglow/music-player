import { combineReducers } from 'redux'
import songsReducer from './songSlice'

const rootReducer = combineReducers({
  songs: songsReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
