import MockAdapter from 'axios-mock-adapter'
import { getLocationWeather } from './App.service'
import { customAxios } from '../services/api'

const apiKey = process.env.API_KEY

describe('App Service', () => {
  const mock = new MockAdapter(customAxios)
  afterEach(() => {
    mock.reset()
  })
  it.skip('should return weather data for Singapore', async () => {
    const mockedData = {
      name: 'Singapore',
      main: { temp: 30, humidity: 80 },
      desc: { weather: [{ main: 'clouds' }] },
      dt: 1644070765,
      country: 'SG',
    }
    mock
      .onGet(`/weather?q=singapore&units=metric&appid=${apiKey}`)
      .reply(200, mockedData)
  })
  it('should throw error 404', async () => {
    mock.onGet(`/weather?q=&units=metric&appid=${apiKey}`).reply(404)

    await expect(async () => {
      await getLocationWeather('singapore')
    }).rejects.toThrow('City not found. Please try another input.')
  })
})
