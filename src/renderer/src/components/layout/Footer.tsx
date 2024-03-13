import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export const Footer = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('flex flex-col justify-start items-start', className)}>
      <div className="text-sm text-zinc-400">Made by Xinyuh0✨</div>
    </div>
  )
}
