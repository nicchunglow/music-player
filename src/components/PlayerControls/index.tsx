import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  Play,
  Pause,
  Next,
  Back,
  SelectedShuffle,
  Shuffle,
} from '@/assets/images'
import {
  selectNextSong,
  selectPreviousSong,
  togglePlaying,
  toggleShuffle,
} from '@/store/reducers/songSlice'
import { RootState } from '@/store/reducers'

import ButtonWithImage from '../ButtonWithImage'

type PlayerControlsProps = {
  audioRef: {
    current: {
      pause: () => void
      play: () => void
      currentTime: number
    }
  }
  isPlaying: boolean
}

const PlayerControl: React.FC<PlayerControlsProps> = ({
  audioRef,
  isPlaying,
}) => {
  const dispatch = useDispatch()

  const onHandleMusic = () => {
    dispatch(togglePlaying())
  }
  const shuffledState = useSelector(
    (state: RootState) => state.songs.isShuffled
  )
  const onHandleShuffle = () => {
    dispatch(toggleShuffle())
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
        className='mt-4 flex w-full flex-col items-center justify-center'
        aria-label='player-controls'
      >
        <span className='my-4 flex w-full justify-around'>
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
        </span>
        <div
          aria-label='shuffle-button'
          className={`${shuffledState ? 'bg-sky-400' : 'bg-white'} flex h-12 w-12 justify-center rounded-full`}
        >
          <ButtonWithImage
            onClick={onHandleShuffle}
            imgSrc={shuffledState ? SelectedShuffle : Shuffle}
            altText='shuffle'
          />
        </div>
      </div>
    </>
  )
}

export default PlayerControl
