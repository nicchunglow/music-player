import { songIdList, shuffleList } from './helper'
import songs from './assets/music'

describe('Helper', () => {
  describe('songIdList ', () => {
    it('should generate a list of song IDs', () => {
      const expectedIds = songs.map((song) => song.id)

      const result = songIdList

      expect(result).toEqual(expectedIds)
    })
  })
  describe('shuffleList', () => {
    it('should shuffle a list', () => {
      const list = [1, 2, 3, 4]
      const expected = shuffleList(list)
      expect(expected).not.toEqual(list)
    })
  })
})
