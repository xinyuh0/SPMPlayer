import { ActionButton, ActionButtonProps } from '@renderer/components'
import { LuSearch } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

export const SearchButton = ({ ...props }: ActionButtonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/search')
  }

  return (
    <ActionButton onClick={handleClick} {...props}>
      <div className="flex justify-start items-center">
        <LuSearch className="w-4 h-4 text-zinc-300" />
        <span className="ml-4 text-zinc-300">Search</span>
      </div>
    </ActionButton>
  )
}
