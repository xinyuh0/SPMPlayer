import { capitalize, cn } from '@renderer/utils'
import { Artist } from '@shared/models'
import { CardContainer, CardContainerProps } from './CardContainer'

export type ArtistCardProps = CardContainerProps & {
  data: Artist
}

export const ArtistCard = ({ data, className, ...props }: ArtistCardProps) => {
  return (
    <CardContainer
      className={cn('p-2 shrink-0 w-32 flex flex-col justify-start items-center', className)}
      {...props}
    >
      {data.images && data.images.length > 0 ? (
        <img
          src={data.images[0].url}
          alt="No image"
          className="w-28 h-28 rounded-full object-cover"
        />
      ) : (
        <div className="w-28 h-28 rounded-full">No image</div>
      )}
      <div className="w-full text-xs truncate mt-2">{data.name}</div>
      <div className="w-full text-[0.625em] text-zinc-400 truncate">{capitalize(data.type)}</div>
    </CardContainer>
  )
}
