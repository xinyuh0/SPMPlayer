import { BrowseHistoryButtonGroup, SearchInput, TopBarContainer } from '@renderer/components'
import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'

export type SearchTopBarProps = ComponentProps<'div'>

export const SearchTopBar = ({ className, ...props }: SearchTopBarProps) => {
  return (
    <TopBarContainer
      className={cn('flex flex-row justify-start items-center', className)}
      {...props}
    >
      <BrowseHistoryButtonGroup className="z-10 h-10" />
      <SearchInput
        className="z-10 ml-4 h-10 w-80 bg-zinc-500/30 text-sm"
        placeholder="What do you want to play?"
      />
    </TopBarContainer>
  )
}
