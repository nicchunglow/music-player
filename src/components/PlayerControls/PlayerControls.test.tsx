import { render, screen, fireEvent } from '@testing-library/react'
import PlayerControls from '.'

const audioMock = {
  play: jest.fn(),
  pause: jest.fn(),
}

describe('PlayerControls', () => {
  afterEach(() => {
    jest.resetAllMocks()
  })
  test('renders player controls', () => {
    render(<PlayerControls audio={audioMock} />)

    const backButton = screen.getByAltText('back')
    const playButton = screen.getByAltText('play')
    const nextButton = screen.getByAltText('next')

    expect(backButton).toBeInTheDocument()
    expect(playButton).toBeInTheDocument()
    expect(nextButton).toBeInTheDocument()
  })

  test('should have audioMock.play called after clicking play', () => {
    render(<PlayerControls audio={audioMock} />)

    const playingButton = screen.getByAltText('play')
    fireEvent.click(playingButton)

    expect(audioMock.play).toHaveBeenCalledTimes(1)
    expect(audioMock.pause).not.toHaveBeenCalled()
  })
  test('should have audioMock.pause called after clicking pause, after it was played', () => {
    render(<PlayerControls audio={audioMock} />)

    const playingButton = screen.getByAltText('play')

    fireEvent.click(playingButton)

    expect(playingButton).toHaveAttribute('alt', 'pause')

    fireEvent.click(playingButton)

    expect(audioMock.play).toHaveBeenCalledTimes(1)
    expect(audioMock.pause).toHaveBeenCalledTimes(1)
  })
})
