import App from './App'
import { render, screen } from '@testing-library/react'

describe('App', () => {
  it('renders weather details', async () => {
    render(<App />)
    const Title = screen.getByRole('heading', {
      name: 'title',
    })
    const Temperature = screen.getByRole('heading', {
      name: 'temperature',
    })
    const HighestTemp = screen.getByLabelText('highest-temp')
    const LowestTemp = screen.getByLabelText('lowest-temp')
    const Location = screen.getByLabelText('location')
    const WeatherDesc = screen.getByLabelText('weather-description')
    const Humidity = screen.getByLabelText('humidity')
    const Date = screen.getByLabelText('date')
    expect(Title).toBeInTheDocument()
    expect(Temperature).toBeInTheDocument()
    expect(HighestTemp).toBeInTheDocument()
    expect(LowestTemp).toBeInTheDocument()
    expect(Location).toBeInTheDocument()
    expect(WeatherDesc).toBeInTheDocument()
    expect(Humidity).toBeInTheDocument()
    expect(Date).toBeInTheDocument()
  })
})
