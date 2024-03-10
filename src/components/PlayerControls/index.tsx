import React from 'react'
import { useDispatch } from 'react-redux'

import { Play, Pause, Next, Back } from '@/assets/images'
import {
  selectNextSong,
  selectPreviousSong,
  togglePlaying,
} from '@/store/reducers/songSlice'
import ButtonWithImage from '../ButtonWithImage'

type PlayerControlsProps = {
  audioRef?: {
    current?: {
      pause: () => void
      play: () => void
      currentTime: number
    }
  }
  isPlaying?: boolean
}

const PlayerControl: React.FC<PlayerControlsProps> = ({
  audioRef,
  isPlaying,
}) => {
  const dispatch = useDispatch()

  const onHandleMusic = () => {
    dispatch(togglePlaying())
  }

  const onHandleSongQueue = (action?: string | null) => {
    if (audioRef?.current) {
      if (action === 'back') {
        if (audioRef.current.currentTime < 3) {
          dispatch(selectPreviousSong())
        } else {
          audioRef.current.currentTime = 0
        }
      } else {
        dispatch(selectNextSong())
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
