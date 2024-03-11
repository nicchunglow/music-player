export const shuffleList = (array: number[]) => {
  if (array.length < 1) {
    return array
  }

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

export const isArrayDifferent = (arr1: number[], arr2: number[]) => {
  const diffLengthCondition = arr1.length !== arr2.length
  if (arr1.length < 1 || arr2.length < 1 || diffLengthCondition) {
    return true
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return true
    }
  }
  return false
}
