import { Song } from '@/sharedTypes'
import React from 'react'
import SongQueueCard from '../SongQueueCard'

type SongQueueList = {
  songQueue: number[]
  songs: Song[]
  isPlaying: boolean
}

const SongQueueList: React.FC<SongQueueList> = ({
  songs,
  songQueue,
  isPlaying,
}) => {
  const SongQueueGenerator = songQueue.map((songId) => {
    const currentSong = songs.find((song) => song.id === songId)

    if (currentSong) {
      const { title, artist } = currentSong
      return <SongQueueCard key={songId} {...{ title, artist }} />
    }
  })
  return (
    <div
      className=' mx-4 flex h-[95vh] w-11/12
        flex-col items-center rounded-3xl bg-white 
        bg-opacity-25 md:w-10/12 lg:w-3/12 lg:max-w-[700px]'
    >
      <h1 className='mt-12 font-bold'>Song Queue</h1>
      <p
        className={`text-green-500 transition-opacity duration-500 ease-in-out ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
      >
        now playing
      </p>

      <span
        className='my-4 flex h-full 
        w-full flex-col items-center overflow-y-scroll px-4'
      >
        {SongQueueGenerator}
      </span>
    </div>
  )
}

export default SongQueueList
