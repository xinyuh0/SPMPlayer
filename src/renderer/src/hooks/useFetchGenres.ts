import { getGenres } from '@renderer/services/api'
import { useEffect, useState } from 'react'

export const useFetchGenres = () => {
  const [genres, setGenres] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    const fetchGeneres = async () => {
      setLoading(true)
      const _genres = await getGenres()
      setGenres(_genres)
      setLoading(false)
    }

    fetchGeneres()
  }, [])

  return { genres, loading }
}
