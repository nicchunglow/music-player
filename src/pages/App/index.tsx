import React from 'react'
import { useSelector } from 'react-redux'
import songs from '@/assets/music'
import Player from '@/components/Player'
import { RootState } from '@/store/reducers'

const App: React.FC = () => {
  const currentSongIndex = useSelector(
    (state: RootState) => state.songs.currentSongIndex
  )

  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div
        className='flex h-[95vh] w-11/12 flex-col items-center justify-center 
          rounded-3xl bg-white bg-opacity-25 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'
      >
        <Player selectedSong={songs[currentSongIndex]} />
      </div>
    </div>
  )
}

export default App
