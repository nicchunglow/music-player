import { formatUnixTimestampToDate } from './helper'

describe('formatUnixTimestampToDate', () => {
  it('formats Unix timestamp without commas', () => {
    const unixTimestamp = 1644052740
    const formattedDate = formatUnixTimestampToDate(unixTimestamp)

    expect(formattedDate).toBe('02/05/2022 05:19 PM')
  })
})
