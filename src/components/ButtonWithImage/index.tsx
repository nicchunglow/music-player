import React from 'react'

interface ButtonWithImageProps {
  onClick?: () => void
  imgSrc?: string
  altText?: string
}

const ButtonWithImage: React.FC<ButtonWithImageProps> = ({
  onClick,
  imgSrc,
  altText,
}) => {
  return (
    <button onClick={onClick} className='hover:opacity-80  active:opacity-60'>
      {imgSrc && <img src={imgSrc} alt={altText} width={'30px'} />}
    </button>
  )
}

export default ButtonWithImage
