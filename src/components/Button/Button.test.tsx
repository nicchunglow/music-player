import Button from './index'
import { render, screen } from '@testing-library/react'
import SearchIcon from '../../assets/Search.svg'

describe('Button', () => {
  const props = {
    imgSrc: SearchIcon,
    altText: 'Something',
  }
  it('renders', () => {
    render(<Button {...props} />)
    const ImgButton = screen.getByRole('button', {
      name: 'Something',
    })
    expect(ImgButton).toBeInTheDocument()
  })
})
