import React, { useEffect, useState } from 'react'
import songs from '@/assets/music'
import PlayerControls from '@/components/PlayerControls'

const App: React.FC = () => {
  const [selectedSong, setSelectedSong] = useState(songs[0])

  useEffect(() => {
    setSelectedSong(songs[0])
  }, [])

  const audio = new Audio(selectedSong?.song)
  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center'>
        <div
          className='flex h-[95vh] w-11/12 flex-col items-center justify-center 
          rounded-3xl bg-white bg-opacity-25 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'
        >
          <div
            className='flex h-72 w-72 flex-col items-center justify-center 
          rounded-xl bg-white bg-opacity-25'
          >
            img
          </div>
          <div
            className='items-left my-8 flex h-48 w-11/12 flex-col items-center'
            aria-label='player'
          >
            <h1 className='text-xl font-bold'>{selectedSong.title}</h1>
            <h1 className='text-l'>{selectedSong.artist}</h1>
            <span>
              ________________________________________________________________________
            </span>
            <PlayerControls audio={audio} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
