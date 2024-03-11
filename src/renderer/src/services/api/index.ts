import { SPOTIFY_BASE_URL } from '@shared/constant'
import { GetGenreResponse } from '@shared/models'

const fetchWithHeaders = async (url: string, options: any = {}) => {
  try {
    const token = await window.context.readAccessToken()

    let headers = {
      Authorization: `Bearer ${token}`
    }

    if (options.headers) {
      headers = {
        ...headers,
        ...options.headers
      }
    }

    const res = await fetch(`${SPOTIFY_BASE_URL}${url}`, { ...options, headers })

    if (res.status === 401) {
      // Token expired
      console.log('Access token expired')
      await window.context.generateAccessToken()

      // TODO: when token expired, regenerate it and refersh tha page
    }

    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
    return null
  }
}

const get = async (url: string, params = {}, options = {}) => {
  const query = new URLSearchParams()
  Object.keys(params).forEach((key) => query.set(key, params[key]))

  const urlWithQuery = query.size > 0 ? url + '?' + query.toString() : url

  return await fetchWithHeaders(urlWithQuery, (options = { ...options, method: 'GET' }))
}

const post = async (url: string, options = {}) => {
  return await fetchWithHeaders(url, (options = { ...options, method: 'POST' }))
}

export const getGenres = async (): Promise<string[]> => {
  const { genres } = (await get('/recommendations/available-genre-seeds')) as GetGenreResponse

  return genres
}

export const getRecommandations = async (genreSeeds: string[]) => {
  const res = new Map<string, any>()

  for (const seed of genreSeeds) {
    const { tracks } = await get('/recommendations', { seed_genres: [seed], market: 'JP' })
  }

  return res
}
