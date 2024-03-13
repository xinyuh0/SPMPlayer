import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { Title } from './Title'

type SearchResultListProps = ComponentProps<'div'> & {
  title: string
}

export const SearchResultList = ({
  title,
  className,
  children,
  ...props
}: SearchResultListProps) => {
  return (
    <>
      <Title>{title}</Title>
      <div className={cn('flex flex-row w-full overflow-y-auto', className)} {...props}>
        {children}
      </div>
    </>
  )
}
