import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { LuUser2 } from 'react-icons/lu'

export const EmptyAvatar = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('w-28 h-28 rounded-full p-8 bg-zinc-600/50', className)} {...props}>
      <LuUser2 className="w-full h-full" />
    </div>
  )
}
