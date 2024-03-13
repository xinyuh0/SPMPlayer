export type CredentialInfo = {
  clientId: string
  clientSecret: string
}

export type GetGenreResponse = {
  genres: string[]
}

export enum SearchType {
  Album = 'album',
  Artist = 'artist',
  PlayList = 'playlist',
  Track = 'track',
  Show = 'show',
  Episode = 'episode',
  Audiobook = 'audiobook'
}
