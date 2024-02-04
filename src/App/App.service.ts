import { customAxios } from '../helper/api'

export const getLocationWeather = async (location: string) => {
  const apiKey = process.env.API_KEY
  const url = `/weather?q=${location}&appid=${apiKey}`

  try {
    const res = await customAxios.get(url)
    if (res.data) {
      return res.data
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err.message)
  }
}
