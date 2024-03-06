import React, { useEffect, useState } from 'react'
import songs from '@/assets/music'
import Player from '@/components/Player'

type Song = {
  artist: string
  audio?: any
  title: string
}

const App: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState<Song>()

  useEffect(() => {
    setSelectedSong(songs[0])
  }, [])

  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center'>
        <div
          className='flex h-[95vh] w-11/12 flex-col items-center justify-center 
          rounded-3xl bg-white bg-opacity-25 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'
        >
          <Player selectedSong={selectedSong} />
        </div>
      </div>
    </>
  )
}

export default App
