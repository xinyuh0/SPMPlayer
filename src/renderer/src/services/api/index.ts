import { SPOTIFY_BASE_URL } from '@shared/constant'

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

const get = async (url: string, options = {}) => {
  return await fetchWithHeaders(url, (options = { ...options, method: 'GET' }))
}

const post = async (url: string, options = {}) => {
  return await fetchWithHeaders(url, (options = { ...options, method: 'POST' }))
}

export const getRecommandations = async () => {
  const { genres } = await get('/recommendations/available-genre-seeds')

  console.log(genres)
}
