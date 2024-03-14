import { LoadingCard, SearchResultList } from '@renderer/components'
import { cn } from '@renderer/utils'
import { SearchType } from '@shared/models'
import { ComponentProps } from 'react'

export const SearchLoading = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('flex flex-col justify-start items-start pb-4', className)} {...props}>
      {/* Tracks */}
      <SearchResultList title={'Tracks'} className="flex-col">
        {Array.from({ length: 5 }).map((_, index) => (
          <LoadingCard type={SearchType.Track} key={index} />
        ))}
      </SearchResultList>
      {/* Artists */}
      <SearchResultList title={'Artists'}>
        {Array.from({ length: 5 }).map((_, index) => (
          <LoadingCard type={SearchType.Artist} key={index} />
        ))}
      </SearchResultList>
      {/* Albums */}
      <SearchResultList title={'Albums'}>
        {Array.from({ length: 5 }).map((_, index) => (
          <LoadingCard type={SearchType.Album} key={index} />
        ))}
      </SearchResultList>
      {/* Playlists */}
      <SearchResultList title={'Playlists'}>
        {Array.from({ length: 5 }).map((_, index) => (
          <LoadingCard type={SearchType.PlayList} key={index} />
        ))}
      </SearchResultList>
    </div>
  )
}
