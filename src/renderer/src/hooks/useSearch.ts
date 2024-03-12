import { sleep } from '@renderer/utils'
import { useCallback, useState } from 'react'

export const useSearch = () => {
  const [res, setRes] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(false)

  // `fetchData` will be passed as props
  // wrap it with `useCallback` to avoid rerender of SearchInput component
  const fetchData = useCallback(async (value: string) => {
    if (value.trim().length === 0) {
      return
    }

    setLoading(true)
    // fetch data here
    console.log('fetching data with value:', value)
    await sleep()
    setRes({})
    setLoading(false)
  }, [])

  const clearRes = () => {
    setRes(null)
  }

  return {
    res,
    loading,
    fetchData,
    clearRes
  }
}
