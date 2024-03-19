import { SPOTIFY_BASE_URL } from '@shared/constant'
import { GetGenreResponse, SearchResult, SearchType, UserInfo } from '@shared/models'

const fetchWithHeaders = async (
  url: string,
  type: 'default' | 'user' = 'default',
  options: any = {}
) => {
  const token = await window.context.readAccessToken(type)

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

  if (res.status === 401 && type === 'default') {
    // Token expired, regenerate and refresh the page
    console.log('Access token expired')
    await window.context.generateAccessToken()

    return window.location.reload()
  }

  if (res.status === 401 && type === 'user') {
    throw new Error('Not logged in')
  }

  const data = await res.json()
  return data
}

const get = async (
  url: string,
  params = {},
  type: 'default' | 'user' = 'default',
  options = {}
) => {
  const query = new URLSearchParams()
  Object.keys(params).forEach((key) => query.set(key, params[key]))

  const urlWithQuery = query.size > 0 ? url + '?' + query.toString() : url

  return await fetchWithHeaders(urlWithQuery, type, (options = { ...options, method: 'GET' }))
}

const post = async (url: string, options = {}) => {
  return await fetchWithHeaders(url, 'default', (options = { ...options, method: 'POST' }))
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

export const search = async (query: string, market: string = 'JP'): Promise<SearchResult> => {
  return (await get('/search', {
    q: query,
    type: Object.values(SearchType) as string[],
    market,
    limit: 5
  })) as SearchResult
}

export const getUserProfile = async (): Promise<UserInfo> => {
  return (await get('/me', {}, 'user')) as UserInfo
}
