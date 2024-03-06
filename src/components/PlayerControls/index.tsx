import React, { useState } from 'react'
import { Play, Pause, Next, Back } from '../../assets/images'
import ButtonWithImage from '../ButtonWithImage'

type PlayerControlsProps = {
  audio?: {
    pause: () => void
    play: () => void
  }
}

const PlayerControls: React.FC<PlayerControlsProps> = ({ audio }) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const onHandleMusic = () => {
    setIsPlaying((prevIsPlaying) => {
      const newIsPlaying = !prevIsPlaying
      if (audio) {
        newIsPlaying ? audio.play() : audio.pause()
      }
      return newIsPlaying
    })
  }
  const playPauseConditionImage = isPlaying ? Pause : Play
  const playPauseConditionText = isPlaying ? 'pause' : 'play'

  return (
    <div
      className='mt-4 flex w-full justify-evenly'
      aria-label='player-controls'
    >
      <ButtonWithImage imgSrc={Back} altText='back' />
      <ButtonWithImage
        onClick={onHandleMusic}
        imgSrc={playPauseConditionImage}
        altText={playPauseConditionText}
      />
      <ButtonWithImage imgSrc={Next} altText='next' />
    </div>
  )
}

export default PlayerControls
