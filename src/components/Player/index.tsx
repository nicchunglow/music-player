import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import PlayerControl from '../PlayerControls'
import { RootState } from '@/store/reducers'

type PlayerProps = {
  selectedSong: {
    title: string
    artist: string
    audio: any
    img?: string
  }
}

const Player: React.FC<PlayerProps> = ({ selectedSong }) => {
  const audioRef = useRef<HTMLAudioElement>(selectedSong?.audio)
  const isPlaying = useSelector((state: RootState) => state.songs.isPlaying)

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = selectedSong?.audio
    }
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [selectedSong, isPlaying])
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
        <audio ref={audioRef}>
          <source type='audio/mp3' />
          Your browser does not support the audio element.
        </audio>
        <PlayerControl {...{ audioRef, isPlaying }} />
      </div>
    </>
  )
}

export default Player
