import { GenreCard } from '@renderer/components'
import { useFetchGenres } from '@renderer/hooks'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const GenreCardList = ({ className, ...props }: ComponentProps<'div'>) => {
  const { loading, genres } = useFetchGenres()

  return (
    <div className={cn('flex flex-row flex-wrap', className)} {...props}>
      {loading
        ? 'loading...'
        : genres.map((genre, index) => (
            <GenreCard className="w-fit mr-2 mb-2" key={index} title={genre} />
          ))}
    </div>
  )
}
