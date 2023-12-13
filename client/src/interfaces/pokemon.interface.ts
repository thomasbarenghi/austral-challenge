export interface Character {
  url: string
  name: string
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
