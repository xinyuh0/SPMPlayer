import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const TopBarContainer = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    // Add margin for draggable header
    <div className={cn('p-3 pt-6 sticky top-0 w-full', className)} {...props}>
      {children}
    </div>
  )
}
