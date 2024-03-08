import React from 'react'

type SongQueueCard = { title: string; artist: string }

const SongQueueCard: React.FC<SongQueueCard> = ({ title, artist }) => {
  return (
    <div className='m-4 max-w-sm overflow-hidden rounded bg-white shadow-lg'>
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
        <p className='text-gray-700 text-base'>{artist}</p>
      </div>
    </div>
  )
}

export default SongQueueCard
