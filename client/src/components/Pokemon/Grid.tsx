import { type Character } from '@/interfaces'
import { PokeError, PokeLoader, PokemonItem } from '..'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'

interface Props {
  pokemons: Character[]
  isLoading?: boolean
  isError?: boolean
}

const PokemonGrid = ({ pokemons, isLoading, isError }: Props) => {
  const [currentPage, setCurrentPage] = useState(0)
  const eventsPerPage = 9
  const startIndex = currentPage * eventsPerPage
  const endIndex = startIndex + eventsPerPage
  const toShow = pokemons?.slice(startIndex, endIndex)

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected)
  }

  return (
    <>
      {isLoading && <PokeLoader />}
      {isError && <PokeError />}
      {!isLoading && !isError && (
        <>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {toShow?.map((pokemon) => (
              <PokemonItem key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
          <ReactPaginate
            pageCount={Math.ceil(pokemons?.length / eventsPerPage)}
            pageRangeDisplayed={5}
            previousLabel='Anterior'
            nextLabel='Siguiente'
            marginPagesDisplayed={2}
            onPageChange={handlePageChange}
            containerClassName='flex gap-2 justify-center items-center'
            activeClassName='font-semibold'
            disabledClassName='opacity-50 cursor-not-allowed'
          />
        </>
      )}
    </>
  )
}
export default PokemonGrid
