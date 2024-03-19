import { CredentialInfo } from '@shared/models'

declare global {
  interface Window {
    context: {
      getCredentials: () => Promise<CredentialInfo | null>
      generateAccessToken: () => Promise<string | null>
      readAccessToken: (type: 'default' | 'user') => Promise<string | null>
      login: () => void
    }
  }
}
