import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type SkeletonProps = ComponentProps<'div'> & {
  variant?: 'circular' | 'rectangular' | 'rounded'
}

export const Skeleton = ({ className, variant = 'rounded', children, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn(
        'animate-pulse bg-zinc-600/40',
        {
          'rounded-full': variant === 'circular',
          'rounded-md': variant === 'rounded'
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
