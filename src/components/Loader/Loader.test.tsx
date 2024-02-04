import { render, screen } from '@testing-library/react'
import Loader from './index'

describe('Loader Component', () => {
  it('should render', () => {
    render(<Loader />)

    const loader = screen.getByRole('progressbar', {
      name: 'loading',
    })

    expect(loader).toBeInTheDocument()
  })
})
