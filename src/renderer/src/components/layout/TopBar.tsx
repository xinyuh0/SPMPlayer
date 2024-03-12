import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const TopBarContainer = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('p-3 sticky top-0 w-full', className)} {...props}>
      {children}
    </div>
  )
}
