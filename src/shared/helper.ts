export const formatUnixTimestampToDate = (unixTimestamp) => {
  const timestampInMilliseconds = unixTimestamp * 1000

  const date = new Date(timestampInMilliseconds)

  const formattedDate = date
    .toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    })
    .replace(',', '')

  return formattedDate
}
