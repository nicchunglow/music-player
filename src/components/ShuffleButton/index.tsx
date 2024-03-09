import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonWithImage from '../ButtonWithImage'
import { SelectedShuffle, Shuffle } from '@/assets/images'
import { toggleShuffle } from '@/store/reducers/songSlice'
import { RootState } from '@/store/reducers'

const ShuffleButton: React.FC = () => {
  const dispatch = useDispatch()
  const shuffledState = useSelector(
    (state: RootState) => state.songs.isShuffled
  )
  const onHandleShuffle = () => {
    dispatch(toggleShuffle())
  }

  return (
    <div
      aria-label='shuffle-button'
      className={`${shuffledState ? 'bg-sky-400' : 'bg-white'} flex h-12 w-12 justify-center rounded-full`}
    >
      <ButtonWithImage
        onClick={onHandleShuffle}
        imgSrc={shuffledState ? SelectedShuffle : Shuffle}
        altText='shuffle'
      />
    </div>
  )
}

export default ShuffleButton
