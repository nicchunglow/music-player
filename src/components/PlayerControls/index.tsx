import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { Play, Pause, Next, Back } from '@/assets/images'
import { selectNextSong, selectPreviousSong } from '@/store/reducers/songSlice'
import ButtonWithImage from '../ButtonWithImage'

type PlayerControlsProps = {
  audio?: {
    current: {
      pause: () => void
      play: () => void
      currentTime: number
    }
  }
}

const PlayerControl: React.FC<PlayerControlsProps> = ({ audio }) => {
  const dispatch = useDispatch()
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  const onHandleMusic = () => {
    setIsPlaying((prevIsPlaying) => {
      const newIsPlaying = !prevIsPlaying
      if (audio) {
        newIsPlaying ? audio.current.play() : audio.current.pause()
      }
      return newIsPlaying
    })
  }
  const onHandleSongQueue = (action?: string | null) => {
    if (audio) {
      if (action === 'back') {
        if (audio.current.currentTime < 3) {
          audio.current.pause()
          setIsPlaying(false)
          dispatch(selectPreviousSong())
          setIsPlaying(true)
        } else {
          audio.current.currentTime = 0
          audio.current.play()
        }
      } else {
        setIsPlaying(false)
        audio.current.pause()
        dispatch(selectNextSong())
        setIsPlaying(true)
      }
    }
  }

  const playPauseConditionImage = isPlaying ? Pause : Play
  const playPauseConditionText = isPlaying ? 'pause' : 'play'

  return (
    <>
      <div
        className='mt-4 flex w-full justify-evenly'
        aria-label='player-controls'
      >
        <ButtonWithImage
          onClick={() => onHandleSongQueue('back')}
          imgSrc={Back}
          altText='back'
        />
        <ButtonWithImage
          onClick={onHandleMusic}
          imgSrc={playPauseConditionImage}
          altText={playPauseConditionText}
        />
        <ButtonWithImage
          onClick={onHandleSongQueue}
          imgSrc={Next}
          altText='next'
        />
      </div>
    </>
  )
}

export default PlayerControl
