import { GenreCardList, SearchResult, SearchTopBar, Title } from '@renderer/components'
import { search } from '@renderer/services/api'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

export const Search = () => {
  const { query } = useParams()

  // Display genre list by default (when route is '/search')
  const emptyQuery = query === undefined

  // TODO: optimize here
  const { data, isLoading } = useQuery({
    queryKey: ['search', query],
    queryFn: () => search(query as string),
    enabled: query !== undefined
  })

  return (
    <>
      <SearchTopBar className="px-4" />
      {emptyQuery || (!isLoading && data === undefined) ? (
        <>
          <Title className="px-4">Browse All Genres</Title>
          <GenreCardList className="px-4" />
        </>
      ) : (
        <SearchResult className="px-4" data={data} isLoading={isLoading} />
      )}
    </>
  )
}
