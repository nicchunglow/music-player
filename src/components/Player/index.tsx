import React from 'react'
import PlayerControl from '../PlayerControls'

type PlayerProps = {
  selectedSong?: {
    artist?: string
    audio?: any
    title?: string
  }
}

const Player: React.FC<PlayerProps> = ({ selectedSong }) => {
  const audio = new Audio(selectedSong?.audio)
  return (
    <>
      <img
        className='flex h-96 w-96 flex-col items-center justify-center 
          rounded-xl bg-white bg-opacity-25'
        src='https://picsum.photos/500'
      />
      <div
        className='items-left my-8 flex h-48 w-11/12 flex-col items-center'
        aria-label='player'
      >
        <h1 className='text-xl font-bold'>{selectedSong?.title}</h1>
        <h1 className='text-l'>{selectedSong?.artist}</h1>
        <span>
          ________________________________________________________________________
        </span>
        <PlayerControl audio={audio} />
      </div>
    </>
  )
}

export default Player
