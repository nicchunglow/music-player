import React from 'react'
import { useSelector } from 'react-redux'
import songs from '@/assets/music'
import Player from '@/components/Player'
import { RootState } from '@/store/reducers'
import SongQueueList from '@/components/SongQueueList'

const App: React.FC = () => {
  const currentSongId = useSelector(
    (state: RootState) => state.songs.currentSongId
  )

  return (
    <div className='flex h-screen flex-col items-center lg:flex-row lg:justify-center'>
      <span
        className='my-4 flex w-11/12 flex-col items-center justify-evenly rounded-3xl
          bg-white bg-opacity-25 md:w-9/12 lg:h-[95vh] lg:w-5/12 lg:max-w-[700px]'
      >
        <Player selectedSong={songs[currentSongId]} />
      </span>
      <SongQueueList songs={songs} />
    </div>
  )
}

export default App
