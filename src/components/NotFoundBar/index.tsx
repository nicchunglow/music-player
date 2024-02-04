import React from 'react'

type NotFoundBarProps = {
  errorMsg: string
}

const NotFoundBar: React.FC<NotFoundBarProps> = ({ errorMsg }) => {
  return (
    <>
      <div
        aria-label='not-found'
        className='bg-red z-10 mt-5 rounded-xl  bg-opacity-50 px-5 text-xs'
      >
        <p>{errorMsg}</p>
      </div>
    </>
  )
}
export default NotFoundBar
