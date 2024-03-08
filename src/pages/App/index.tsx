import React from 'react'
import { useSelector } from 'react-redux'
import songs from '@/assets/music'
import Player from '@/components/Player'
import { RootState } from '@/store/reducers'
import SongQueueCard from '@/components/SongQueueCard'

const App: React.FC = () => {
  const currentSongIndex = useSelector(
    (state: RootState) => state.songs.currentSongIndex
  )
  const songQueue = useSelector((state: RootState) => state.songs.songQueue)

  const SongQueueGenerator = songQueue.map((songId) => {
    const currentSong = songs.find((song) => song.id === songId)

    if (currentSong) {
      const { title, artist } = currentSong
      return <SongQueueCard key={songId} {...{ title, artist }} />
    }
  })

  return (
    <div className='flex h-screen items-center justify-center'>
      <div
        className='flex h-[95vh] w-11/12 flex-col items-center justify-center
          rounded-3xl bg-white bg-opacity-25 md:w-10/12 lg:w-4/12 lg:max-w-[700px]'
      >
        <Player selectedSong={songs[currentSongIndex]} />
      </div>
      <div
        className='mx-4 flex h-[95vh] w-11/12 flex-col items-center justify-center
          rounded-3xl bg-white bg-opacity-25 md:w-10/12 lg:w-3/12 lg:max-w-[700px]'
      >
        <h1 className='font-bold'>Song Queue</h1>
        {SongQueueGenerator}
      </div>
    </div>
  )
}

export default App
