import { songIdList, formatTime } from './helper'
import songs from './assets/music'

describe('Helper', () => {
  describe('songIdList ', () => {
    it('should generate a list of song IDs', () => {
      const expectedIds = songs.map((song) => song.id)

      const result = songIdList

      expect(result).toEqual(expectedIds)
    })
  })

  describe('formatTime', () => {
    it('formats time correctly for values less than a minute', () => {
      expect(formatTime(30)).toBe('00:30')
    })

    it('formats time correctly for values less than 10 minutes', () => {
      expect(formatTime(245)).toBe('04:05')
    })

    it('formats time correctly for values greater than 10 minutes', () => {
      expect(formatTime(600)).toBe('10:00')
    })

    it('handles invalid input by returning "00:00"', () => {
      expect(formatTime(NaN)).toBe('00:00')
    })

    it('handles zero input by returning "00:00"', () => {
      expect(formatTime(0)).toBe('00:00')
    })
  })
})
