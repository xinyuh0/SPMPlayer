import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<'button'> & { isActive?: boolean }

export const ActionButton = ({ isActive, className, children, ...props }: ActionButtonProps) => {
  return (
    <button
      className={cn(
        'px-2.5 py-3 rounded-md hover:bg-zinc-600/50 transition-colors duration-100',
        {
          'bg-zinc-400/75': isActive,
          'hover:bg-zinc-500/75': !isActive
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
