import { CardContainer, Skeleton } from '@renderer/components'
import { cn } from '@renderer/utils'
import { SearchType } from '@shared/models'
import { ComponentProps } from 'react'

export type LoadingCardProps = ComponentProps<'div'> & {
  type: SearchType
}

export const LoadingCard = ({ type, className, ...props }: LoadingCardProps) => {
  if (type === SearchType.Track) {
    return (
      <CardContainer
        className={cn(
          'hover:bg-zinc-900/50 flex flex-row justify-between items-center py-1.5',
          className
        )}
        {...props}
      >
        <div className="flex flex-row items-center">
          <Skeleton variant="circular" className="w-7 h-7" />
          <div className="ml-2">
            <Skeleton className="w-72 h-4" />
            <Skeleton className="w-32 h-3 mt-[3px]" />
          </div>
        </div>
        <Skeleton className="w-6 h-6" />
      </CardContainer>
    )
  }

  return (
    <CardContainer
      className={cn(
        'hover:bg-zinc-900/50 p-2 shrink-0 w-32 flex flex-col justify-start items-start',
        className
      )}
      {...props}
    >
      <Skeleton
        className="w-28 h-28"
        variant={type === SearchType.Artist ? 'circular' : 'rounded'}
      />
      <Skeleton className="w-28 h-4 mt-2" />
      <Skeleton className="w-14 h-3 mt-[3px]" />
    </CardContainer>
  )
}
