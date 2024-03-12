import { BackwardButton, ForwardButton } from './Button'

export const BrowseHistoryButtonGroup = () => {
  return (
    // Set z-index to 10, so the button group won't be covered by draggable header
    <div className="flex flex-row z-10">
      <BackwardButton />
      <ForwardButton className="ml-2" />
    </div>
  )
}
