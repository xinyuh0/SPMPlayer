import { EmptyAvatar, Skeleton } from '@renderer/components'
import { cn } from '@renderer/utils'
import { UserInfo as Info } from '@shared/models'
import { ComponentProps } from 'react'

export type UserInfoProps = ComponentProps<'div'> & {
  data: Info
}

export const UserInfo = ({ data, className, ...props }: UserInfoProps) => {
  return (
    <div className={cn('flex justify-start items-center', className)} {...props}>
      {data.images && data.images.length > 0 ? (
        <img
          src={data.images[0].url}
          alt="No image"
          className="w-16 h-16 rounded-full object-cover"
        />
      ) : (
        <EmptyAvatar className="w-10 h-10 p-2.5 shrink-0" />
      )}
      <div className="ml-2 truncate">{data.display_name}</div>
    </div>
  )
}

export const UserInfoLoading = () => {
  return (
    <div className="flex justify-start items-center">
      <Skeleton variant="circular" className="w-10 h-10" />
      <Skeleton className="ml-2 w-24 h-6" />
    </div>
  )
}
