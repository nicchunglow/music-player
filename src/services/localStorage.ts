export const saveToLocalStorage = (data) => {
  const processedData = JSON.stringify(data)
  localStorage.setItem('histories', processedData)
}

export const getLocalStorageHistories = () => {
  const res: any = localStorage.getItem('histories')
  return JSON.parse(res)
}
