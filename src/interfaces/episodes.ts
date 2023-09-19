export interface Results {
  id: number
  name: string
  air_date: string
  eposide: string
  characters: string[]
  url: string
  created: string
}

interface Info {
  count: number
  page: number
  next: string
}

export interface Episode {
  info: Info
  results: Results[]
}
