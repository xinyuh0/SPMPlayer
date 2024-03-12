import { GenreCardList } from '../GenreCardList'
import { Title } from '../Title'
import { SearchTopBar } from '../layout'

export const Search = () => {
  return (
    <>
      <SearchTopBar />
      <Title>Browse All Genres</Title>
      <GenreCardList className="px-3" />
    </>
  )
}
