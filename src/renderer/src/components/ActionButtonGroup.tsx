import { ComponentProps } from 'react'
import { HomeButton, SearchButton } from './Button'

export const ActionButtonGroup = ({ ...props }: ComponentProps<'div'>) => {
  return (
    <div {...props}>
      <HomeButton className="w-full" />
      <SearchButton className="w-full" />
    </div>
  )
}
