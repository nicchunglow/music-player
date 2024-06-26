import { formatTime } from '@/helper'
import React, { ChangeEvent, RefObject } from 'react'

type ProgressBarProps = {
  progressBarRef: any
  audioRef: RefObject<HTMLAudioElement>
  timeProgress: number
  duration: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarRef,
  audioRef,
  timeProgress = 0,
  duration = 0,
}) => {
  const handleProgressChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.valueAsNumber
    if (audioRef.current) {
      audioRef.current.currentTime = newValue
    }
  }

  return (
    <div className='progress flex w-full items-center justify-between'>
      <span aria-label='time-progress' className='text-sm text-gray-500'>
        {formatTime(timeProgress)}
      </span>
      <input
        type='range'
        ref={progressBarRef}
        defaultValue='0'
        max={duration}
        onChange={handleProgressChange}
        className='h-1 w-full flex-grow cursor-pointer rounded'
      />
      <span aria-label='duration' className='text-sm text-gray-500'>
        {formatTime(duration)}
      </span>
    </div>
  )
}

export default ProgressBar
