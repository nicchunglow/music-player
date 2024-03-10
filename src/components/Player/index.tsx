import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/reducers'
import PlayerControl from '../PlayerControls'
import ProgressBar from '../ProgressBar'

type PlayerProps = {
  selectedSong: {
    title: string
    artist: string
    audio: any
    id: any
    img?: string
  }
}

const Player: React.FC<PlayerProps> = ({ selectedSong }) => {
  const [timeProgress, setTimeProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)

  const audioRef = useRef<HTMLAudioElement>(selectedSong?.audio)
  const progressBarRef = useRef<HTMLInputElement>(null)
  const playAnimationRef = useRef<number | null>(null)

  const isPlaying = useSelector((state: RootState) => state.songs.isPlaying)

  const onLoadedMetadata = () => {
    const seconds = audioRef?.current?.duration || 0
    setDuration(seconds)
  }

  const repeat = useCallback(() => {
    const currentTime = audioRef?.current?.currentTime || 0
    setTimeProgress(currentTime)

    if (progressBarRef.current) {
      progressBarRef.current.value = currentTime.toString()
      progressBarRef.current.style.setProperty(
        '--range-progress',
        `${(currentTime / duration) * 100}%`
      )
    }

    playAnimationRef.current = requestAnimationFrame(repeat)
  }, [audioRef, duration, progressBarRef])

  useEffect(() => {
    const audioElement = audioRef.current

    if (audioElement) {
      audioElement.src = selectedSong?.audio
    }

    if (audioElement && isPlaying) {
      audioElement.play()
    } else if (audioElement) {
      audioElement.pause()
    }

    playAnimationRef.current = requestAnimationFrame(repeat)

    return () => {
      cancelAnimationFrame(playAnimationRef?.current || 0)
    }
  }, [selectedSong, isPlaying, repeat])

  return (
    <>
      {selectedSong.img ? (
        <img
          className='flex h-96 w-96 flex-col items-center justify-center 
          rounded-xl bg-white bg-opacity-25'
          src={selectedSong?.img}
        />
      ) : (
        <div
          className='flex h-96 w-96 items-center justify-center
          rounded-xl bg-white bg-opacity-40'
        >
          <h1>No Artist Image available</h1>
        </div>
      )}
      <div
        className='items-left my-8 flex h-48 w-11/12 flex-col items-center'
        aria-label='player'
      >
        <h1 className='text-xl font-bold'>{selectedSong?.title}</h1>
        <h1 className='text-l'>{selectedSong?.artist}</h1>
        <audio ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
          <source type='audio/mp3' />
          Your browser does not support the audio element.
        </audio>
        <ProgressBar
          {...{ timeProgress, duration, audioRef, progressBarRef }}
        />
        <PlayerControl {...{ audioRef, isPlaying }} />
      </div>
    </>
  )
}

export default Player
