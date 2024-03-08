import React from 'react'

type SongQueueCard = { title: string; artist: string }

const SongQueueCard: React.FC<SongQueueCard> = ({ title, artist }) => {
  return (
    <div className='roundedshadow-lg m-4 w-full max-w-sm overflow-hidden'>
      <div className='px-6 py-4'>
        <div className='mb-2 text-xl font-bold'>{title}</div>
        <p className=' text-base'>{artist}</p>
      </div>
    </div>
  )
}

export default SongQueueCard
