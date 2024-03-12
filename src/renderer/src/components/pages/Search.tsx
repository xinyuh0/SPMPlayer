import { useSearch } from '@renderer/hooks/useSearch'
import { useState } from 'react'
import { GenreCardList } from '../GenreCardList'
import { SearchResultList } from '../SearchResultList'
import { Title } from '../Title'
import { SearchTopBar } from '../layout'

export const Search = () => {
  const [emptyInput, setEmptyInput] = useState<boolean>(true)
  const { res, fetchData, clearRes } = useSearch()

  const handleInputValChange = (value: string) => {
    if (value.length === 0) {
      setEmptyInput(true)
      clearRes()
    } else {
      setEmptyInput(false)
    }
  }

  return (
    <>
      <SearchTopBar fetchData={fetchData} handleValChange={handleInputValChange} className="px-4" />
      {emptyInput || res === null ? (
        <>
          <Title className="px-4">Browse All Genres</Title>
          <GenreCardList className="px-4" />
        </>
      ) : (
        <SearchResultList className="px-4" res={res} />
      )}
    </>
  )
}
