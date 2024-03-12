import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { BrowseHistoryButtonGroup } from '../BrowseHistoryButtonGroup'
import { TopBarContainer } from './TopBar'

export const HomeTopBar = ({ className, ...props }: ComponentProps<'div'>) => {
  return (
    <TopBarContainer
      className={cn('flex flex-row justify-start items-center', className)}
      {...props}
    >
      <BrowseHistoryButtonGroup className="z-10 h-10" />
    </TopBarContainer>
  )
}
