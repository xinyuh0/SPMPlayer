import { sleep } from '@renderer/utils'
import { SPOTIFY_BASE_URL } from '@shared/constant'
import { GetGenreResponse, SearchType } from '@shared/models'
import { mockSearchResult } from './mock'

const fetchWithHeaders = async (url: string, options: any = {}) => {
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

export const search = async (query: string, market: string = 'JP') => {
  await sleep(1000)
  // TODO: remove mock data
  return mockSearchResult

  return await get('/search', {
    q: query,
    type: Object.values(SearchType) as string[],
    market,
    limit: 10
  })
}
