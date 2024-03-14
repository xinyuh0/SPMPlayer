import {
  AlbumCard,
  ArtistCard,
  PlaylistCard,
  SearchEmpty,
  SearchLoading,
  SearchResultList,
  TrackCard
} from '@renderer/components'
import { cn } from '@renderer/utils'
import { SearchResult as SearchRes } from '@shared/models'
import { ComponentProps } from 'react'

export type SearchResultProps = ComponentProps<'div'> & {
  data?: SearchRes
  isLoading: boolean
}

export const SearchResult = ({ data, isLoading, className, ...props }: SearchResultProps) => {
  if (isLoading) return <SearchLoading className={className} />

  const empty =
    !data ||
    (data.tracks.total === 0 &&
      data.artists.total === 0 &&
      data.albums.total === 0 &&
      data.playlists.total === 0)

  if (empty) return <SearchEmpty />

  return (
    <div className={cn('flex flex-col justify-start items-start pb-4', className)} {...props}>
      {/* Tracks */}
      {data.tracks.total > 0 && (
        <SearchResultList title={'Tracks'} className="flex-col">
          {data.tracks.items.map((track) => (
            <TrackCard data={track} key={track.id} />
          ))}
        </SearchResultList>
      )}
      {/* Artists */}
      {data.artists.total > 0 && (
        <SearchResultList title={'Artists'}>
          {data.artists.items.map((artist) => (
            <ArtistCard data={artist} key={artist.id} />
          ))}
        </SearchResultList>
      )}
      {/* Albums */}
      {data.albums.total > 0 && (
        <SearchResultList title={'Albums'}>
          {data.albums.items.map((album) => (
            <AlbumCard data={album} key={album.id} />
          ))}
        </SearchResultList>
      )}
      {/* Playlists */}
      {data.playlists.total > 0 && (
        <SearchResultList title={'Playlists'}>
          {data.playlists.items.map((playlist) => (
            <PlaylistCard data={playlist} key={playlist.id} />
          ))}
        </SearchResultList>
      )}
    </div>
  )
}
