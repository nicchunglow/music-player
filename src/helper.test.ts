import { songIdList } from './helper'
import songs from './assets/music'

describe('Helper', () => {
  describe('songIdList ', () => {
    it('should generate a list of song IDs', () => {
      const expectedIds = songs.map((song) => song.id)

      const result = songIdList

      expect(result).toEqual(expectedIds)
    })
  })
})
