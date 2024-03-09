import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ButtonWithImage from '../ButtonWithImage'
import { SelectedRepeat, Repeat } from '@/assets/images'
import { toggleRepeat } from '@/store/reducers/songSlice'
import { RootState } from '@/store/reducers'

const RepeatButton: React.FC = () => {
  const dispatch = useDispatch()
  const repeatState = useSelector((state: RootState) => state.songs.isRepeated)

  const onHandleRepeat = () => {
    dispatch(toggleRepeat())
  }

  return (
    <div
      aria-label='repeat-button'
      className={`${repeatState ? 'bg-sky-400' : 'bg-white'} flex h-12 w-12 justify-center rounded-full`}
    >
      <ButtonWithImage
        onClick={onHandleRepeat}
        imgSrc={repeatState ? SelectedRepeat : Repeat}
        altText='repeat'
      />
    </div>
  )
}

export default RepeatButton
