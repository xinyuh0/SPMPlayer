import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { BackwardButton, ForwardButton } from './Button'

export const BrowseHistoryButtonGroup = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <div className={cn('flex flex-row items-center', className)} {...props}>
      <BackwardButton />
      <ForwardButton className="ml-2" />
    </div>
  )
}
