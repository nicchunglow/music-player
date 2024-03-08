import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonWithImage from '../ButtonWithImage'
import { SelectedShuffle, Shuffle } from '@/assets/images'
import { isShuffled } from '@/store/reducers/songSlice'
import { RootState } from '@/store/reducers'

const ShuffleButton: React.FC = () => {
  const dispatch = useDispatch()
  const shuffledState = useSelector(
    (state: RootState) => state.songs.isShuffled
  )
  const onHandleShuffle = () => {
    dispatch(isShuffled())
  }

  return (
    <ButtonWithImage
      onClick={onHandleShuffle}
      imgSrc={shuffledState ? SelectedShuffle : Shuffle}
      altText='shuffle'
    />
  )
}

export default ShuffleButton
