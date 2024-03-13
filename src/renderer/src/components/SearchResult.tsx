import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type SearchResultProps = ComponentProps<'div'> & {
  data: any
  isLoading: boolean
}

export const SearchResult = ({ data, isLoading, className, ...props }: SearchResultProps) => {
  return (
    <div className={cn('', className)} {...props}>
      {isLoading ? 'loading...' : <div></div>}
    </div>
  )
}
