import React from 'react'

const App: React.FC = () => {
  return (
    <>
      <div className='flex justify-center'>
        <div className='flex h-screen w-9/12 flex-col rounded-lg border-[1px] border-white bg-white bg-opacity-25 md:w-10/12 lg:w-3/4'>
          <div className='p-10'>
            <h1 aria-label='title' className='text-lg'>
              Today's Weather
            </h1>
            <h2
              aria-label='temperature'
              className='text-5xl font-bold text-primaryAccent'
            >
              26°
            </h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
