import { formatGenreName } from '@renderer/utils'
import { CardContainer, CardContainerProps } from './CardContainer'

export type GenreCardProps = CardContainerProps & {
  title: string
  img?: string
}

export const GenreCard = ({ title, img, className, ...props }: GenreCardProps) => {
  return (
    <CardContainer className={className} {...props}>
      <div>{formatGenreName(title)}</div>
    </CardContainer>
  )
}
