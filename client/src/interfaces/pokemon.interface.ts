export interface Character {
  id: string
  name: string
  image: string
  url: string
  dreamworld: string
  artwork: string
}

export interface CharacterInfo {
  height: number
  id: number
  name: string
  species: {
    id: number
    name: string
  }
  status: string
  weight: number
}
