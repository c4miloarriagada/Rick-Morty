export interface Response {
  pageParams: undefined | []
  pages: Locations
}

export interface Locations {
  info: Info
  results: Results[]
}

interface Info {
  count: number
  pages: number
  next: string
  prev: null | string
}

export interface Results {
  id: number
  name: string
  type: string
  dimension: string
  residents: string[]
  url: string
  created: string
}
