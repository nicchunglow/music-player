import React from 'react'

interface ButtonWithImageProps {
  onClick?: () => void
  imgSrc?: string
  altText?: string
}

const Button: React.FC<ButtonWithImageProps> = ({
  onClick,
  imgSrc,
  altText,
}) => {
  return (
    <button onClick={onClick} className='hover:opacity-80  active:opacity-60'>
      <img src={imgSrc} alt={altText} />
    </button>
  )
}

export default Button
