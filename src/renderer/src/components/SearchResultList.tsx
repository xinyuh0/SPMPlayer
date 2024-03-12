import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type SearchResultListProps = ComponentProps<'div'> & {
  res: any
}

export const SearchResultList = ({ res, className, ...props }: SearchResultListProps) => {
  return (
    <div className={cn('', className)} {...props}>
      result
    </div>
  )
}
