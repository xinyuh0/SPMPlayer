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
  Track = 'track'
}

export type Image = {
  url: string
  height: number | null
  width: number | null
}

export type Album = {
  album_type: string
  total_tracks: number
  available_markets?: string[]
  href: string
  id: string
  images: Image[]
  name: string
  release_date: string
  release_date_precision: string
  uri: string
  artists: Array<{
    name: string
    id: string
    type: string
  }>
  type: string
}

export type Artist = {
  href: string
  id: string
  images?: Image[]
  name: string
  popularity?: number
  uri: string
  type: string
}

export type Track = {
  album: Album
  artists?: Artist[]
  available_markets?: string[]
  disc_number: number
  duration_ms: number
  explicit: boolean
  href: string
  id: string
  is_playable: boolean
  name: string
  popularity: number
  track_number: number
  type: string
  uri: string
}

export type PlayList = {
  collaborative: boolean
  description: string | null
  href: string
  id: string
  images: Image[]
  name: string
  owner: {
    id: string
    type: string
    uri: string
    display_name: string
  }
}

export type SearchResultItem = {
  href: string
  limit: number
  next: string
  offset: number
  previous: string | null
  total: number
}

export type SearchResult = {
  tracks: SearchResultItem & {
    items: Track[]
  }
  artists: SearchResultItem & {
    items: Artist[]
  }
  albums: SearchResultItem & {
    items: Album[]
  }
  playlists: SearchResultItem & {
    items: PlayList[]
  }
}
