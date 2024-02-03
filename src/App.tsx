import React from 'react'
import Summary from './components/Summary'

const App: React.FC = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex h-screen w-10/12 flex-col rounded-lg border-[1px] border-white bg-white bg-opacity-25 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'>
          <Summary />
        </div>
      </div>
    </>
  )
}

export default App
