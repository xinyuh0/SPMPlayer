import { cn } from '@renderer/utils'
import { ComponentProps } from 'react'
import { BrowseHistoryButtonGroup } from '../BrowseHistoryButtonGroup'
import { SearchInput } from '../SearchInput'
import { TopBarContainer } from './TopBar'

export type SearchTopBarProps = ComponentProps<'div'> & {
  fetchData: (value: string) => void
  handleValChange: (value: string) => void
}

export const SearchTopBar = ({
  className,
  fetchData,
  handleValChange,
  ...props
}: SearchTopBarProps) => {
  return (
    <TopBarContainer
      className={cn('flex flex-row justify-start items-center', className)}
      {...props}
    >
      <BrowseHistoryButtonGroup className="z-10 h-10" />
      <SearchInput
        className="z-10 ml-4 h-10 w-80 bg-zinc-500/30 text-sm"
        placeholder="What do you want to play?"
        fetchData={fetchData}
        handleValChange={handleValChange}
      />
    </TopBarContainer>
  )
}
