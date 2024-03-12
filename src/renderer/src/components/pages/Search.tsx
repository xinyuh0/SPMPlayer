import { GenreCardList } from '../GenreCardList'
import { Title } from '../Title'
import { SearchTopBar } from '../layout'

export const Search = () => {
  return (
    <>
      <SearchTopBar className="px-4" />
      <Title className="px-4">Browse All Genres</Title>
      <GenreCardList className="px-4" />
    </>
  )
}
