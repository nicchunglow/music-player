import { selectSong } from '@/store/reducers/songSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

type SongQueueCard = { title: string; artist: string; id: number }

const SongQueueCard: React.FC<SongQueueCard> = ({ title, artist, id }) => {
  const dispatch = useDispatch()

  return (
    <div
      aria-label={`${id}-song-card`}
      className='w-full max-w-sm px-4 hover:rounded hover:bg-gray-200 hover:text-black'
      onClick={() => {
        dispatch(selectSong(id))
      }}
    >
      <span className='px-6'>
        <h2 className='text-base font-bold '>{title}</h2>
        <p className=' text-base'>{artist}</p>
      </span>
    </div>
  )
}

export default SongQueueCard
