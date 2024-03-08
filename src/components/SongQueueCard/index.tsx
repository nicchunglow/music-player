import React from 'react'

type SongQueueCard = { title: string; artist: string }

const SongQueueCard: React.FC<SongQueueCard> = ({ title, artist }) => {
  return (
    <div
      aria-label={`${title}-song-card`}
      className='roundedshadow-lg m-4 w-full max-w-sm overflow-hidden'
    >
      <span className='px-6 py-4'>
        <h2 className='text-base font-bold'>{title}</h2>
        <p className=' text-base'>{artist}</p>
      </span>
    </div>
  )
}

export default SongQueueCard
