import { customAxios } from '../helper/api'

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
        weather: weather,
        dt: dt,
        country: sys.country,
      }
      return processedData
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err.message)
  }
}
