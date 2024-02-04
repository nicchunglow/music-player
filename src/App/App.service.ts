import { customAxios } from '../services/api'

export const getLocationWeather = async (location: string) => {
  const apiKey = process.env.API_KEY
  const url = `/weather?q=${location}&units=metric&appid=${apiKey}`

  try {
    const res = await customAxios.get(url)
    if (res.data) {
      const { name, weather, main, dt, sys } = res.data
      const processedData = {
        name: name,
        main: main,
        desc: weather[0].main || '',
        dt: dt,
        country: sys.country || '',
      }
      return processedData
    }
  } catch (err: any) {
    if (err?.response.status === 404) {
      throw new Error('City not found. Please try another input.')
    } else {
      throw new Error(err.message)
    }
  }
}
