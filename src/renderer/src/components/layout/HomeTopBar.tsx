import { BrowseHistoryButtonGroup } from '../BrowseHistoryButtonGroup'
import { TopBarContainer } from './TopBar'

export const HomeTopBar = () => {
  return (
    <TopBarContainer className="flex flex-row justify-start items-center">
      <BrowseHistoryButtonGroup />
    </TopBarContainer>
  )
}
