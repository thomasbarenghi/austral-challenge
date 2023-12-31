import { type Character } from '@/interfaces'
import { PokeError, PokeLoader, PokemonItem } from '..'

interface Props {
  pokemons: Character[]
  isLoading?: boolean
  isError?: boolean
}

const PokemonGrid = ({ pokemons, isLoading, isError }: Props) => (
  <>
    {isLoading && <PokeLoader />}
    {isError && <PokeError />}
    {!isLoading && !isError && (
      <div className='flex w-full flex-col gap-2'>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
          {pokemons?.map((pokemon) => (
            <PokemonItem key={pokemon.name} pokemon={pokemon} />
          ))}
        </div>
      </div>
    )}
  </>
)
export default PokemonGrid
