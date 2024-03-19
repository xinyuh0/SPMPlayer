import { ActionButton, ActionButtonProps } from '@renderer/components'
import { cn } from '@renderer/utils'

export const LoginButton = ({ className, ...props }: ActionButtonProps) => {
  return (
    <ActionButton
      className={cn('w-full flex justify-center items-center', className)}
      {...props}
      onClick={() => {
        window.context.login()
      }}
    >
      Login with Spotify
    </ActionButton>
  )
}
