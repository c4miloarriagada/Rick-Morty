export interface Character {
  info: Info
  results: Results[]
}

interface Info {
  count: number
  page: number
  next: string
}

export interface Results {
  id: number
  name: string
  status: 'Alive' | 'Dead' | 'unknown'
  species: string
  type: string
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown'
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    location: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}
