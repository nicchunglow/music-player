import React from 'react'
import { Circles } from 'react-loader-spinner'

const Loader: React.FC = () => {
  return (
    <>
      <div className=' fixed z-20 flex h-full w-full items-center justify-center bg-grey bg-opacity-50'>
        <Circles height='80' width='80' color='white' ariaLabel='loading' />
      </div>
    </>
  )
}
export default Loader
