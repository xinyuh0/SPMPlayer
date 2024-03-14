import { cn } from '@renderer/utils'
import { LuHome } from 'react-icons/lu'
import { useLocation, useNavigate } from 'react-router-dom'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const HomeButton = ({ ...props }: ActionButtonProps) => {
  const navigate = useNavigate()
  const location = useLocation()

  const isActive = location.pathname === '/'

  const handleClick = () => {
    navigate('/')
  }

  return (
    <ActionButton onClick={handleClick} isActive={isActive} {...props}>
      <div className="flex justify-start items-center">
        <LuHome className={cn('w-4 h-4 text-zinc-300', { 'text-white': isActive })} />
        <span className={cn('ml-4 text-zinc-300', { 'text-white': isActive })}>Home</span>
      </div>
    </ActionButton>
  )
}
