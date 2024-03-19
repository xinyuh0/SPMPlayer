import { LoginButton } from '@renderer/components'
import { getUserProfile } from '@renderer/services/api'
import { cn } from '@renderer/utils'
import { useQuery } from '@tanstack/react-query'
import { ComponentProps } from 'react'

export const UserPlayList = ({ className }: ComponentProps<'div'>) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['user'],
    queryFn: getUserProfile
  })

  return <div className={cn('py-2', className)}>{(isLoading || isError) && <LoginButton />}</div>
}
