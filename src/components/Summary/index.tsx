import React from 'react'
import { WeatherData } from '../../App/App.types'

type SummaryProps = {
  data: WeatherData
}
const Summary: React.FC<SummaryProps> = ({
  data: { name, main, desc, dt, country },
}) => {
  const mainTemp = Math.floor(main?.temp) || 0
  const HighestTemp = Math.floor(main?.temp_max) || 0
  const LowestTemp = Math.floor(main?.temp_min) || 0
  return (
    <>
      <div aria-label='summary' className='w-full py-12'>
        <h1 aria-label='title' className='text-lg'>
          Today's Weather
        </h1>
        <span className='flex flex-row'>
          <span>
            <p
              aria-label='temperature'
              className='text-5xl font-bold text-primaryAccent'
            >
              {mainTemp}°
            </p>
            <span className='flex flex-col'>
              <div className='flex'>
                <p aria-label='highest-temp' className=' text-sm'>
                  H: {HighestTemp}°
                </p>
                <p aria-label='lowest-temp' className='text-sm '>
                  L: {LowestTemp}°
                </p>
              </div>
              <p aria-label='location' className='text-sm font-bold text-grey'>
                {name || '_'},{country || '_'}
              </p>
            </span>
          </span>
          <span className='ml-5 flex w-full flex-col items-end justify-end md:flex-row-reverse md:justify-between'>
            <p aria-label='weather-description' className='text-sm text-grey'>
              {desc || '_'}
            </p>
            <p aria-label='humidity' className='text-sm text-grey'>
              Humidity : {main?.humidity || 0}%
            </p>
            <p aria-label='date' className='text-sm text-grey'>
              {dt || 0}
            </p>
          </span>
        </span>
      </div>
    </>
  )
}

export default Summary
