import React from 'react'
import { Play, Next, Back } from '../../assets'
const App: React.FC = () => {
  return (
    <>
      <div className='flex h-screen flex-col items-center justify-center'>
        <div
          className='flex h-[95vh] w-11/12 flex-col items-center justify-center rounded-3xl bg-white bg-opacity-25
 md:w-10/12 lg:w-3/5 lg:max-w-[700px]'
        >
          <div className='flex h-72 w-72 flex-col items-center justify-center rounded-xl bg-white bg-opacity-25'>
            img
          </div>
          <div className='items-left my-8 flex h-48 w-11/12 flex-col items-center'>
            <h1 className='text-xl font-bold'>Music Title</h1>
            <h1 className='text-l'>Artist</h1>
            <span>
              ________________________________________________________________________
            </span>
            <div className='mt-4 flex w-full justify-evenly'>
              <img width={'30px'} height={'30px'} src={Back} alt='back' />
              <img width={'30px'} height={'30px'} src={Play} alt='play' />
              <img width={'30px'} height={'30px'} src={Next} alt='next' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
