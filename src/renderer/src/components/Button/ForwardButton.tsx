import { ActionButton, ActionButtonProps } from '@renderer/components'
import { cn } from '@renderer/utils'
import { LuArrowRight } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

export const ForwardButton = ({ className, ...props }: ActionButtonProps) => {
  const navigate = useNavigate()

  const canGoForward = window.history.state.idx < window.history.length - 1

  const handleClick = () => {
    navigate(1)
  }

  return (
    <ActionButton
      className={cn(
        'rounded-full w-8 h-8 p-0 flex justify-center items-center bg-zinc-900/50',
        { 'bg-zinc-900/30': !canGoForward },
        className
      )}
      onClick={handleClick}
      forbidden={!canGoForward}
      {...props}
    >
      <LuArrowRight className={cn('w-4 h-4 text-zinc-300', { 'text-zinc-400': !canGoForward })} />
    </ActionButton>
  )
}
