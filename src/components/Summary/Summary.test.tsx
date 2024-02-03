import Summary from './index'
import { render, screen } from '@testing-library/react'

describe('Summary', () => {
  beforeEach(() => {
    render(<Summary />)
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
  })
})
