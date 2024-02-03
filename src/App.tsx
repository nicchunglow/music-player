import React, { useEffect, useState } from 'react'
import Summary from './components/Summary'
import SearchIcon from './assets/Search.svg'
import DeleteIcon from './assets/Delete.svg'
import { mockHistory } from './constants/mockData'

type History = {
  location: string
  date: string
}

const App: React.FC = () => {
  const [histories, setHistories] = useState<History[]>()

  const getHistories = async () => {
    setHistories(mockHistory)
  }

  useEffect(() => {
    getHistories()
  }, [])

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex h-screen w-11/12 flex-col items-center rounded-3xl border-[1px] border-white bg-white bg-opacity-25 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'>
          <span className='flex w-11/12 flex-col lg:w-10/12'>
            <Summary />
            <div className='flex h-screen w-full flex-col items-center rounded-3xl bg-white bg-opacity-20'>
              <div className='w-11/12'>
                <h2 aria-label='history-title' className=' flex py-5 text-sm'>
                  Search History
                </h2>
                {histories ? (
                  histories.map((history, index) => (
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
                        <img src={SearchIcon} />
                        <img src={DeleteIcon} />
                      </span>
                    </div>
                  ))
                ) : (
                  <div></div>
                )}
              </div>
            </div>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
