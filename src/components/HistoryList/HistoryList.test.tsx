import { render, screen, fireEvent } from '@testing-library/react'
import HistoryList from './index'

const mockHistory = [
  {
    name: 'Johor',
    country: 'MY',
    dt: '1707031344',
  },
  {
    name: 'Osaka',
    country: 'JP',
    dt: '1707031344',
  },
  {
    name: 'Taiwan',
    country: 'TW',
    dt: '1707031344',
  },
]

describe('HistoryList', () => {
  it('renders Search History Title', () => {
    render(
      <HistoryList data={mockHistory} onSelect={() => {}} onDelete={() => {}} />
    )
    const HistoryTitle = screen.getByRole('heading', {
      name: 'history-title',
    })
    expect(HistoryTitle).toBeInTheDocument()
  })

  it('renders history items and handles selection and deletion', () => {
    const onSelectMock = jest.fn()
    const onDeleteMock = jest.fn()

    render(
      <HistoryList
        data={mockHistory}
        onSelect={onSelectMock}
        onDelete={onDeleteMock}
      />
    )

    const FirstHistoryItem = screen.getByLabelText('history-item-0')
    expect(FirstHistoryItem).toBeInTheDocument()
    expect(FirstHistoryItem).toHaveTextContent('Johor,MY02/04/2024 03:22 PM')

    fireEvent.click(screen.getByAltText('search-button-0'))
    expect(onSelectMock).toHaveBeenCalledWith(0)

    fireEvent.click(screen.getByAltText('delete-button-0'))
    expect(onDeleteMock).toHaveBeenCalledWith(0)
  })

  it('renders no history message if there is no data', () => {
    render(<HistoryList data={[]} onSelect={() => {}} onDelete={() => {}} />)
    const NoHistoryMessage = screen.getByLabelText('no-history-message')
    expect(NoHistoryMessage).toBeInTheDocument()
  })

  it('handles selection and deletion using fireEvent', () => {
    const onSelectMock = jest.fn()
    const onDeleteMock = jest.fn()

    render(
      <HistoryList
        data={mockHistory}
        onSelect={onSelectMock}
        onDelete={onDeleteMock}
      />
    )

    fireEvent.click(screen.getByAltText('search-button-1'))
    expect(onSelectMock).toHaveBeenCalledWith(1)

    fireEvent.click(screen.getByAltText('delete-button-2'))
    expect(onDeleteMock).toHaveBeenCalledWith(2)
  })
})
