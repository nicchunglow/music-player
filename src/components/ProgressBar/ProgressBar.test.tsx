import { createRef } from 'react'
import { render, screen } from '@testing-library/react'
import ProgressBar from '.'

describe('ProgressBar', () => {
  const progressBarRefMock = createRef<HTMLInputElement>()
  const audioRefMock = createRef<HTMLAudioElement>()

  beforeEach(() => {
    render(
      <ProgressBar
        progressBarRef={progressBarRefMock}
        audioRef={audioRefMock}
        timeProgress={0}
        duration={0}
      />
    )
  })
  it('renders ProgressBar component', () => {
    const progressTime = screen.getByLabelText('time-progress')
    const durationTime = screen.getByLabelText('duration')

    expect(progressTime).toBeInTheDocument()
    expect(durationTime).toBeInTheDocument()
  })
})
