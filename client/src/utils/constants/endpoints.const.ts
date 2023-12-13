// https://pokeapi.co/api/v2/pokemon?offset=60&limit=20
// calcular offset = (page - 1) * limit

export const endpoints = {
  POKEMONS: (limit: number, page: number) =>
    `/api/v2/pokemon-form?offset=${(page - 1) * limit}&limit=${limit}`,
  POKEMON: (id: number) => `/api/v2/pokemon/${id}`
}
