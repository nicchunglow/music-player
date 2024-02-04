import { render, screen } from '@testing-library/react'
import NotFoundBar from './index'

describe('Loader Component', () => {
  it('should render', () => {
    render(<NotFoundBar errorMsg='ALERT ALERT' />)
    const NotFound = screen.getByLabelText('not-found')
    expect(NotFound).toBeInTheDocument()
  })
})
