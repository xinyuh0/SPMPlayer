import { useFetchGenres } from '@renderer/hooks'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { GenreCard } from './Card'

export const GenreCardList = ({ className, ...props }: ComponentProps<'div'>) => {
  const { loading, genres } = useFetchGenres()

  return (
    <div className={cn('flex flex-row flex-wrap', className)} {...props}>
      {loading ? (
        <div>Loading...</div>
      ) : (
        genres.map((genre, index) => (
          <GenreCard className="w-fit mr-2 mb-2" key={index} title={genre} />
        ))
      )}
    </div>
  )
}
