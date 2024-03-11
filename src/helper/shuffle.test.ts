import { isArrayDifferent, shuffleList } from './shuffle'

describe('first', () => {
  describe('shuffleList', () => {
    it('should shuffle a list', () => {
      const list = [1, 2, 3, 4, 5, 6, 7, 8]
      const expected = shuffleList(list)
      expect(expected).not.toEqual(list)
    })
    it('should return an array of 1 without shuffling', () => {
      const list = [1]
      const expected = shuffleList(list)
      expect(expected).toEqual([1])
    })
  })
  describe('isArrayDifferent', () => {
    it('returns true for different arrays', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [4, 5, 6]
      expect(isArrayDifferent(arr1, arr2)).toBe(true)
    })

    it('returns false for identical arrays', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [1, 2, 3]
      expect(isArrayDifferent(arr1, arr2)).toBe(false)
    })

    it('returns true for arrays with different lengths', () => {
      const arr1 = [1, 2, 3]
      const arr2 = [1, 2, 3, 4]
      expect(isArrayDifferent(arr1, arr2)).toBe(true)
    })

    it('returns true for empty arrays', () => {
      const arr1: number[] = []
      const arr2: number[] = []
      expect(isArrayDifferent(arr1, arr2)).toBe(true)
    })

    it('returns true if one array is empty and the other is not', () => {
      const arr1: number[] = []
      const arr2 = [1, 2, 3]
      expect(isArrayDifferent(arr1, arr2)).toBe(true)
    })
  })
})
