import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<'button'> & {
  forbidden?: boolean
  isActive?: boolean
}

export const ActionButton = ({
  forbidden = false,
  isActive = false,
  className,
  children,
  ...props
}: ActionButtonProps) => {
  return (
    <button
      className={cn(
        'px-2.5 py-3 rounded-md transition-colors duration-200',
        { 'cursor-not-allowed': forbidden, 'hover:bg-zinc-500/50': !forbidden && !isActive },
        { 'bg-zinc-400/40': isActive },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
