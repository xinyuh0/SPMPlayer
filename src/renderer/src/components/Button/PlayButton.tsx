import { cn } from '@renderer/utils'
import { LuPlay } from 'react-icons/lu'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const PlayButton = ({ className }: ActionButtonProps) => {
  return (
    <ActionButton
      className={cn(
        'p-0 w-7 h-7 flex felx-row items-center justify-center rounded-full bg-zinc-700',
        className
      )}
    >
      <LuPlay className="w-4 h-4 translate-x-[1px] text-zinc-100 z-0" />
    </ActionButton>
  )
}
