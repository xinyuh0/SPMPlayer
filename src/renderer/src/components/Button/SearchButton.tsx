import { ActionButton, ActionButtonProps } from '@renderer/components'
import { cn } from '@renderer/utils'
import { LuSearch } from 'react-icons/lu'
import { useLocation, useNavigate } from 'react-router-dom'

export const SearchButton = ({ ...props }: ActionButtonProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = location.pathname.startsWith('/search')

  const handleClick = () => {
    navigate('/search')
  }

  return (
    <ActionButton onClick={handleClick} isActive={isActive} {...props}>
      <div className="flex justify-start items-center">
        <LuSearch className={cn('w-4 h-4 text-zinc-300', { 'text-white': isActive })} />
        <span className={cn('ml-4 text-zinc-300', { 'text-white': isActive })}>Search</span>
      </div>
    </ActionButton>
  )
}
