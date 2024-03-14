import { cn } from '@renderer/utils'
import { LuArrowLeft } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const BackwardButton = ({ className, ...props }: ActionButtonProps) => {
  const navigate = useNavigate()

  const canGoBackward = window.history.state.idx !== 0

  const handleClick = () => {
    navigate(-1)
  }

  return (
    <ActionButton
      className={cn(
        'rounded-full w-8 h-8 p-0 flex justify-center items-center bg-zinc-900/50',
        { 'bg-zinc-900/30': !canGoBackward },
        className
      )}
      onClick={handleClick}
      forbidden={!canGoBackward}
      {...props}
    >
      <LuArrowLeft className={cn('w-4 h-4 text-zinc-300', { 'text-zinc-400': !canGoBackward })} />
    </ActionButton>
  )
}
