import React, { useEffect, useState } from 'react'
import Summary from './components/Summary'
import { mockHistory } from './constants/mockData'
import HistoryList from './components/HistoryList'

type History = {
  location: string
  date: string
}

const App: React.FC = () => {
  const [histories, setHistories] = useState<History[]>([])

  const getHistories = async () => {
    setHistories(mockHistory)
  }

  useEffect(() => {
    getHistories()
  }, [])

  return (
    <>
      <div className='flex justify-center'>
        <div className='flex h-full w-11/12 flex-col items-center rounded-3xl border-[1px] border-white bg-white bg-opacity-25 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'>
          <span className='flex w-11/12 flex-col lg:w-10/12'>
            <Summary />
            <HistoryList data={histories} />
          </span>
        </div>
      </div>
    </>
  )
}

export default App
