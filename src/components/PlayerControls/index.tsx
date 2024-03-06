import React from 'react'
import { Play, Next, Back } from '../../assets'
import ButtonWithImage from '../ButtonWithImage'

type PlayerControls = {
  song?: any
}

const PlayerControls: React.FC<PlayerControls> = (song) => {
  const onHandleMusic = () => {
    const audio = new Audio(song?.song)
    audio.play()
  }
  return (
    <div
      className='mt-4 flex w-full justify-evenly'
      aria-label='player-controls'
    >
      <ButtonWithImage imgSrc={Back} altText='back' />
      <ButtonWithImage onClick={onHandleMusic} imgSrc={Play} altText='play' />
      <ButtonWithImage imgSrc={Next} altText='next' />
    </div>
  )
}

export default PlayerControls
