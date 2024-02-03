import React from 'react'
import Summary from './components/Summary'

const App: React.FC = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex h-screen w-10/12 flex-col items-center rounded-3xl border-[1px] border-white bg-white bg-opacity-25 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'>
          <span className='flex w-10/12 flex-col'>
            <Summary />
            <div className='flex h-screen w-full flex-col rounded-3xl bg-white bg-opacity-10'>
              <h2
                aria-label='history-title'
                className=' flex pl-5 pt-5 text-sm'
              >
                Search History
              </h2>
            </div>
          </span>
        </div>
      </div>
    </>
  )
}

export default App
