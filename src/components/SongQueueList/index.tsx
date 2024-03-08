import { Song } from '@/sharedTypes'
import React from 'react'
import SongQueueCard from '../SongQueueCard'

type SongQueueList = {
  songQueue: number[]
  songs: Song[]
}

const SongQueueList: React.FC<SongQueueList> = ({ songs, songQueue }) => {
  const SongQueueGenerator = songQueue.map((songId) => {
    const currentSong = songs.find((song) => song.id === songId)

    if (currentSong) {
      const { title, artist } = currentSong
      return <SongQueueCard key={songId} {...{ title, artist }} />
    }
  })
  return (
    <div
      className='mx-4 flex h-[95vh] w-11/12 flex-col items-center justify-center
          rounded-3xl bg-white bg-opacity-25 md:w-10/12 lg:w-3/12 lg:max-w-[700px]'
    >
      <h1 className='font-bold'>Song Queue</h1>
      {SongQueueGenerator}
    </div>
  )
}

export default SongQueueList
