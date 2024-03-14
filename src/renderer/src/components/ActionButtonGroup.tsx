import { HomeButton, SearchButton } from '@renderer/components'
import { ComponentProps } from 'react'

export const ActionButtonGroup = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <HomeButton className="w-full" />
      <SearchButton className="w-full" />
    </div>
  )
}
