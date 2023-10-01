import { createQuery } from "@tanstack/solid-query"
import { rickAndMortyApi } from "../api/rick&MortyApi"
import { Results } from "../interfaces/characters"
import { Match, Switch, createSignal } from "solid-js"
import { Loading } from "./Loading"
import { TbCircleDotFilled } from "solid-icons/tb"

const fetchData = async (character: string): Promise<Results> => {
  const { data } = await rickAndMortyApi.get<Results>(
    `character/${character}`
  ) 

  return data
}

export const List = ({ link } : { link :string }) => {
  const sliceString = link.substring(link.length - 2) 
  const [url,] = createSignal(sliceString.includes('/') ? sliceString.replace('/', '') : sliceString)
  const state = createQuery(()=> ['nameCharacter', url()], ()=> fetchData(url()))

  return (
     <Switch fallback={<></>}>
          <Match when={state.isLoading}>
            <li>Cargando...</li>
          </Match>
          <Match when={state.data?.name}>
            <li class="flex gap-x-2 items-center"><TbCircleDotFilled color="#38bdf8" />{ state.data?.name}</li>
          </Match>
        </Switch>
   
  )
}
