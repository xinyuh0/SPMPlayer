import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type CardContainerProps = ComponentProps<'div'>

export const CardContainer = ({ className, children, ...props }: CardContainerProps) => {
  return (
    <div
      className={cn(
        'p-2.5 rounded-md bg-zinc-900/50 hover:cursor-pointer hover:bg-zinc-500/50 transition-colors duration-200',
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}
