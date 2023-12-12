import { gql } from '@apollo/client'

export const GET_POKEMONS = gql`
  query GetPokemons {
    pokemons(limit: 10000) {
      results {
        id
        name
        image
        url
        dreamworld
        artwork
      }
    }
  }
`

export const GET_POKEMON_INFO = gql`
  query GetPokemonInfo($pokemonName: String!) {
    pokemon(name: $pokemonName) {
      height
      id
      name
      species {
        id
        name
      }
      status
      weight
    }
  }
`
