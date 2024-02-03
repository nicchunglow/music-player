import React from 'react'

const Summary: React.FC = () => {
  return (
    <>
      <div aria-label='summary' className='p-5'>
        <h1 aria-label='title' className='text-lg'>
          Today's Weather
        </h1>
        <span className='flex flex-row'>
          <span>
            <p
              aria-label='temperature'
              className='text-5xl font-bold text-primaryAccent'
            >
              26°
            </p>
            <span className='flex flex-col'>
              <div className='flex'>
                <p aria-label='highest-temp' className=' text-sm'>
                  H: 28°
                </p>
                <p aria-label='lowest-temp' className='text-sm '>
                  L: 26°
                </p>
              </div>
              <p aria-label='location' className='text-grey text-sm font-bold'>
                Johor,MY
              </p>
            </span>
          </span>
          <span className='flex w-full flex-col items-end justify-end md:flex-row-reverse md:justify-between'>
            <p aria-label='weather-description' className='text-grey text-sm'>
              Clouds
            </p>
            <p aria-label='humidity' className='text-grey text-sm'>
              Humidity : 58%
            </p>
            <p aria-label='date' className='text-grey text-sm'>
              01-09-2022 09:41am
            </p>
          </span>
        </span>
      </div>
    </>
  )
}

export default Summary
