import HistoryList from './index'
import { render, screen } from '@testing-library/react'

export const mockHistory = [
  {
    name: 'Johor',
    country: 'MY',
    dt: '01-09-2022 09:41am',
  },
  {
    name: 'Osaka',
    country: 'JP',
    dt: '01-09-2022 09:41am',
  },
  {
    name: 'Taiwan',
    country: 'TW',
    dt: '01-09-2022 09:41am',
  },
]

describe('HistoryList', () => {
  it('renders Search History Title', () => {
    render(<HistoryList data={mockHistory} />)
    const HistoryTitle = screen.getByRole('heading', {
      name: 'history-title',
    })
    expect(HistoryTitle).toBeInTheDocument()
  })
  it('renders history items by testing if it has first of the item', () => {
    render(<HistoryList data={mockHistory} />)
    const FirstHistoryItem = screen.getByLabelText('history-item-0')
    expect(FirstHistoryItem).toBeInTheDocument()
  })
  it('renders no history message if there is no data', () => {
    render(<HistoryList data={[]} />)
    const NoHistoryMessage = screen.getByLabelText('no-history-message')
    expect(NoHistoryMessage).toBeInTheDocument()
  })
})
