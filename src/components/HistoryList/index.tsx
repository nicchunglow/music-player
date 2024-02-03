import React from 'react'
import SearchIcon from '../../assets/Search.svg'
import DeleteIcon from '../../assets/Delete.svg'
import Button from '../Button'

type History = {
  location: string
  date: string
}

interface HistoryListProps {
  data: History[]
}

const HistoryList: React.FC<HistoryListProps> = ({ data }) => {
  return (
    <div className='flex h-screen w-full flex-col items-center rounded-3xl bg-white bg-opacity-20'>
      <div className='w-11/12'>
        <h2 aria-label='history-title' className='flex py-5 text-sm'>
          Search History
        </h2>
        {data && data.length > 0 ? (
          <div>
            {data.map((history, index) => (
              <div
                key={index}
                aria-label={`history-item-${index}`}
                className='my-4 flex h-16 items-start justify-around rounded-2xl bg-white bg-opacity-40 px-2 md:flex-row md:justify-between'
              >
                <span className='flex h-full w-full flex-col justify-center pr-5 md:w-full md:flex-row md:items-center md:justify-between'>
                  <p className='text-sm'>{history.location}</p>
                  <p className='text-sm'>{history.date}</p>
                </span>
                <span className='flex h-full w-1/5 items-center justify-end md:items-center'>
                  <Button
                    imgSrc={SearchIcon}
                    altText={`search-button-${index}`}
                  />
                  <Button
                    imgSrc={DeleteIcon}
                    altText={`delete-button-${index}`}
                  />
                </span>
              </div>
            ))}
          </div>
        ) : (
          <span className='flex justify-center'>
            <h1 aria-label='no-history-message'>
              No Search Histories at the moment
            </h1>
          </span>
        )}
      </div>
    </div>
  )
}

export default HistoryList
