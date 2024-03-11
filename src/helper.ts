import songs from './assets/music'

export const songIdList = songs.map((song) => song.id)

export const shuffleQueue = (array: number[]) => {
  const newArray = [...array]

  let currentIndex = newArray.length

  while (currentIndex > 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--
    ;[newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ]
  }

  return newArray
}
