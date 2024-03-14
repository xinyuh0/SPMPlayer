import { CardContainer, CardContainerProps, PlayButton } from '@renderer/components'
import { cn, formatDuration } from '@renderer/utils'
import { Track } from '@shared/models'

export type TrackCardProps = CardContainerProps & {
  data: Track
}

export const TrackCard = ({ data, className, ...props }: TrackCardProps) => {
  return (
    <CardContainer
      className={cn('flex flex-row justify-between items-center py-1.5', className)}
      {...props}
    >
      <div className="flex flex-row items-center">
        <PlayButton />
        <div className="ml-2">
          <div className="text-xs">{data.name}</div>
          <div className="text-[0.625em] text-zinc-400">
            {data.artists && data.artists.length > 0
              ? data.artists.map((artist) => artist.name).join(', ')
              : 'Unknown'}
          </div>
        </div>
      </div>
      <div className="text-xs text-zinc-400">{formatDuration(data.duration_ms)}</div>
    </CardContainer>
  )
}
