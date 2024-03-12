import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type ActionButtonProps = ComponentProps<'button'> & { isActive?: boolean }

export const ActionButton = ({
  isActive = true,
  className,
  children,
  ...props
}: ActionButtonProps) => {
  return (
    <button
      className={cn(
        'px-2.5 py-3 rounded-md transition-colors duration-200',
        { 'cursor-not-allowed': !isActive, 'hover:bg-zinc-500/50': isActive },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
