import ButtonWithImage from './index'
import { render, screen } from '@testing-library/react'
import SearchIcon from '../../assets/Search.svg'

describe('ButtonWithImage', () => {
  const props = {
    imgSrc: SearchIcon,
    altText: 'Something',
  }
  it('renders', () => {
    render(<ButtonWithImage {...props} />)
    const ImgButton = screen.getByRole('button', {
      name: 'Something',
    })
    expect(ImgButton).toBeInTheDocument()
  })
})
