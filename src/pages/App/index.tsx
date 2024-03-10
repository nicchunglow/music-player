import React from 'react'
import { useSelector } from 'react-redux'
import songs from '@/assets/music'
import Player from '@/components/Player'
import { RootState } from '@/store/reducers'
import SongQueueList from '@/components/SongQueueList'
import ShuffleButton from '@/components/ShuffleButton'

const App: React.FC = () => {
  const currentSongId = useSelector(
    (state: RootState) => state.songs.currentSongId
  )

  return (
    <div className='flex h-screen items-center justify-center'>
      <div
        className='flex h-[95vh] w-11/12 flex-col items-center justify-center
          rounded-3xl bg-white bg-opacity-25 md:w-10/12 lg:w-4/12 lg:max-w-[700px]'
      >
        <Player selectedSong={songs[currentSongId]} />
        <ShuffleButton />
      </div>
      <SongQueueList songs={songs} />
    </div>
  )
}

export default App
