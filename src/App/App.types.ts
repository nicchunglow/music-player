type Main = {
  temp: number
  feels_like: number
  temp_min: number
  temp_max: number
  pressure: number
  humidity: number
  sea_level: number
  grnd_level: number
}

export type WeatherData = {
  country: string
  dt: number
  main: Main
  name: string
  desc: string
}
