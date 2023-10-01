import { rickAndMortyApi } from "../api/rick&MortyApi"
import { Character } from "../interfaces/characters"

const fetchData = async (character: string): Promise<Character> => {
  const { data } = await rickAndMortyApi.get<Character>(
    `character/${character}`
  )
  return data
}

export const List = ({ link } : { link :string }) => {

    const sliceString = link.substring(link.length - 2) 
    const url = sliceString.includes('/') ? sliceString.replace('/', '') : sliceString


  return (
    <li>{link}</li>
  )
}
