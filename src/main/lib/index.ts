import { SPOTIFY_ACCOUNT_URL, TOKEN_FILE_NAME } from '@shared/constant'
import { CredentialInfo } from '@shared/models'
import { app, safeStorage } from 'electron'
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

    const res = await fetch(`${SPOTIFY_ACCOUNT_URL}/token`, {
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
    await writeJSON(
      `${app.getPath('userData')}/${TOKEN_FILE_NAME}`,
      safeStorage.encryptString(data.access_token).toString('latin1')
    )

    return data.access_token
  } catch (e) {
    console.error(e)
    return null
  }
}

export const readAccessToken = async (): Promise<string | null> => {
  const path = `${app.getPath('userData')}/${TOKEN_FILE_NAME}`
  const exist = await pathExists(path)

  try {
    // Token store file doesn't exist
    if (!exist) {
      const token = await generateAccessToken()

      if (token === null) {
        throw new Error('Failed to generate access token')
      }

      return token
    }

    // Token store file exists
    const data = await readJSON(path)

    return safeStorage.decryptString(Buffer.from(data.accessToken, 'latin1'))
  } catch (e) {
    console.error(e)
    return null
  }
}
