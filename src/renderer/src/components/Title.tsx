import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const Title = ({ className, children, ...props }: ComponentProps<'div'>) => {
  return (
    <h2 className={cn('p-3 text-xl font-bold', className)} {...props}>
      {children}
    </h2>
  )
}
