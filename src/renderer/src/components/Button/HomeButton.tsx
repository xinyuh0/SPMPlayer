import { LuHome } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'
import { ActionButton, ActionButtonProps } from './ActionButton'

export const HomeButton = ({ ...props }: ActionButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')
  }

  return (
    <ActionButton onClick={handleClick} {...props}>
      <div className="flex justify-start items-center">
        <LuHome className="w-4 h-4 text-zinc-300" />
        <span className="ml-4 text-zinc-300">Home</span>
      </div>
    </ActionButton>
  )
}
