import {
  REDIRECT_URI,
  SPOTIFY_ACCOUNT_URL,
  TOKEN_FILE_NAME,
  USER_TOKEN_FILE_NAME
} from '@shared/constant'
import { CredentialInfo } from '@shared/models'
import { BrowserWindow, app, safeStorage } from 'electron'
import { pathExists, readJSON, writeJSON } from 'fs-extra'

export const readCredentails = async (): Promise<CredentialInfo | null> => {
  try {
    const res: CredentialInfo = await readJSON(`${process.cwd()}/credentials.json`)
    return res
  } catch (e) {
    console.error(e)
    return null
  }
}

export const generateAccessToken = async (): Promise<string | null> => {
  try {
    const credentials = await readCredentails()

    console.log('Generating access token...')

    const res = await fetch(`${SPOTIFY_ACCOUNT_URL}/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(`${credentials?.clientId}:${credentials?.clientSecret}`).toString('base64')
      },
      body: 'grant_type=client_credentials'
    })

    if (!res.ok) {
      throw new Error('Http error: ' + res.status)
    }

    const data = await res.json()

    // Write encrypted token to file
    await writeJSON(`${app.getPath('userData')}/${TOKEN_FILE_NAME}`, {
      accessToken: safeStorage.encryptString(data.access_token).toString('latin1')
    })

    return data.access_token
  } catch (e) {
    console.error(e)
    return null
  }
}

export const readAccessToken = async (type: 'default' | 'user'): Promise<string | null> => {
  const path = `${app.getPath('userData')}/${type === 'default' ? TOKEN_FILE_NAME : USER_TOKEN_FILE_NAME}`
  const exist = await pathExists(path)

  try {
    // Token store file doesn't exist
    if (!exist && type === 'default') {
      const token = await generateAccessToken()

      if (token === null) {
        throw new Error('Failed to generate access token')
      }

      return token
    }

    // User token store file doesn't exist
    if (!exist && type === 'user') {
      throw new Error('Not logged in')
    }

    // Token store file exists
    const data = await readJSON(path)

    return safeStorage.decryptString(Buffer.from(data.accessToken, 'latin1'))
  } catch (e) {
    console.error(e)
    return null
  }
}

export const login = async () => {
  const { clientId, clientSecret } = (await readCredentails()) as CredentialInfo

  const query = new URLSearchParams()
  query.set('response_type', 'code')
  query.set('client_id', clientId)
  query.set('redirect_uri', REDIRECT_URI)
  query.set('show_dialog', 'true')
  // `state` is for security purpose, optional
  // query.set('state', '')

  const authUrl = `${SPOTIFY_ACCOUNT_URL}/authorize?${query.toString()}`

  let authWindow: BrowserWindow | null = new BrowserWindow({
    width: 800,
    height: 600,
    show: false
  })

  authWindow.webContents.on('will-navigate', async (_, url) => {
    // extract access token from redirect url
    const urlParams = new URL(url).searchParams
    const code = urlParams.get('code') as string

    const body = new URLSearchParams()
    body.set('grant_type', 'authorization_code')
    body.set('redirect_uri', REDIRECT_URI)
    body.set('code', code)

    // use code to generate an access token
    const res = await fetch(`${SPOTIFY_ACCOUNT_URL}/api/token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + Buffer.from(`${clientId}:${clientSecret}`).toString('base64')
      },
      body: body.toString()
    })

    const data = await res.json()

    // Write encrypted token to file
    await writeJSON(`${app.getPath('userData')}/${USER_TOKEN_FILE_NAME}`, {
      accessToken: safeStorage.encryptString(data.access_token).toString('latin1'),
      refreshToken: safeStorage.encryptString(data.refresh_token).toString('latin1')
    })

    // wait for 3 seconds to display the information
    await new Promise((resolve) => setTimeout(resolve, 3000))

    authWindow?.close()
  })

  authWindow.on('closed', () => {
    authWindow = null
  })

  authWindow.loadURL(authUrl)
  authWindow.show()
}
