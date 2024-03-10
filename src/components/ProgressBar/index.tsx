import React, { RefObject } from 'react'

type ProgressBarProps = {
  progressBarRef: any
  audioRef: RefObject<HTMLAudioElement>
  timeProgress?: number
  duration?: number
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressBarRef,
  audioRef,
  timeProgress = 0,
  duration = 0,
}) => {
  const handleProgressChange = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = progressBarRef.current?.valueAsNumber || 0
    }
  }

  const formatTime = (time: number): string => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60)
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`
      const seconds = Math.floor(time % 60)
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`
      return `${formatMinutes}:${formatSeconds}`
    }
    return '00:00'
  }

  return (
    <div className='progress flex w-full items-center justify-between'>
      <span className='text-sm text-gray-500'>{formatTime(timeProgress)}</span>
      <input
        type='range'
        ref={progressBarRef}
        defaultValue='0'
        onChange={handleProgressChange}
        className='h-1 w-full flex-grow cursor-pointer rounded-full'
      />
      <span className='text-sm text-gray-500'>{formatTime(duration)}</span>
    </div>
  )
}

export default ProgressBar
