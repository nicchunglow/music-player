import { render, screen } from '@testing-library/react'
import SongQueueCard from '.'

describe('SongQueueCard', () => {
  const sampleProps = {
    title: 'Sample Title',
    artist: 'Sample Artist',
  }

  test('renders title and artist', () => {
    render(<SongQueueCard {...sampleProps} />)

    const titleElement = screen.getByText(sampleProps.title)
    const artistElement = screen.getByText(sampleProps.artist)

    expect(titleElement).toBeInTheDocument()
    expect(artistElement).toBeInTheDocument()
  })
})
