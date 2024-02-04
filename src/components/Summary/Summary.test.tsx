import Summary from './index'
import { render, screen } from '@testing-library/react'

describe('Summary', () => {
  describe('With Data', () => {
    const WeatherData = {
      country: 'SG',
      dt: 1707031344,
      main: {
        temp: 32.4,
        feels_like: 37.08,
        temp_min: 32.4,
        temp_max: 33.57,
        pressure: 1011,
        humidity: 57,
        sea_level: 1011,
        grnd_level: 1000,
      },
      name: 'Singapore',
      desc: 'Clouds',
    }

    beforeEach(() => {
      render(<Summary data={WeatherData} />)
    })
    it('renders title', () => {
      const Title = screen.getByRole('heading', {
        name: 'title',
      })
      expect(Title).toBeInTheDocument()
    })
    it('renders Temp', () => {
      const Temperature = screen.getByLabelText('temperature')
      const HighestTemp = screen.getByLabelText('highest-temp')
      const LowestTemp = screen.getByLabelText('lowest-temp')
      expect(Temperature).toBeInTheDocument()
      expect(HighestTemp).toBeInTheDocument()
      expect(LowestTemp).toBeInTheDocument()
      expect(Temperature).toHaveTextContent('32')
      expect(HighestTemp).toHaveTextContent('H: 33')
      expect(LowestTemp).toHaveTextContent('L: 32')
    })
    it('renders additional information like country,date, humidity and description', () => {
      const Location = screen.getByLabelText('location')
      const WeatherDesc = screen.getByLabelText('weather-description')
      const Humidity = screen.getByLabelText('humidity')
      const Date = screen.getByLabelText('date')
      expect(Location).toBeInTheDocument()
      expect(WeatherDesc).toBeInTheDocument()
      expect(Humidity).toBeInTheDocument()
      expect(Date).toBeInTheDocument()
      expect(Location).toHaveTextContent('Singapore,SG')
      expect(WeatherDesc).toHaveTextContent('Clouds')
      expect(Humidity).toHaveTextContent('Humidity : 57%')
      expect(Date).toHaveTextContent('1707031344')
    })
  })
  describe('If No Data', () => {
    it('should render', () => {
      const WeatherData = {
        country: '',
        dt: 0,
        main: {
          temp: 0,
          feels_like: 0,
          temp_min: 0,
          temp_max: 0,
          pressure: 0,
          humidity: 0,
          sea_level: 0,
          grnd_level: 0,
        },
        name: '',
        desc: '',
      }
      render(<Summary data={WeatherData} />)
      const Temperature = screen.getByLabelText('temperature')
      const HighestTemp = screen.getByLabelText('highest-temp')
      const LowestTemp = screen.getByLabelText('lowest-temp')
      const Location = screen.getByLabelText('location')
      const WeatherDesc = screen.getByLabelText('weather-description')
      const Humidity = screen.getByLabelText('humidity')
      const Date = screen.getByLabelText('date')
      expect(Temperature).toHaveTextContent('0')
      expect(HighestTemp).toHaveTextContent('H: 0')
      expect(LowestTemp).toHaveTextContent('L: ')
      expect(Location).toHaveTextContent('_,_')
      expect(WeatherDesc).toHaveTextContent('_')
      expect(Humidity).toHaveTextContent('Humidity : 0%')
      expect(Date).toHaveTextContent('0')
    })
  })
})
