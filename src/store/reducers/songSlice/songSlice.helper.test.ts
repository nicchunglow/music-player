import { shuffleList } from './songSlice.helper'

describe('Helper', () => {
  describe('shuffleList', () => {
    it('should shuffle a list', () => {
      const list = [1, 2, 3, 4]
      const expected = shuffleList(list)
      expect(expected).not.toEqual(list)
    })
  })
})
