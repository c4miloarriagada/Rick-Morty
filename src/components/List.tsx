import { createQuery } from '@tanstack/solid-query'
import { rickAndMortyApi } from '../api/rick&MortyApi'
import { Results } from '../interfaces/characters'
import { Match, Switch, createSignal } from 'solid-js'
import { TbCircleDotFilled } from 'solid-icons/tb'

const fetchData = async (character: string): Promise<Results | undefined> => {
  if (character) {
    const { data } = await rickAndMortyApi.get<Results>(
      `character/${character}`
    )

    return data
  }
}

export const List = ({ link }: { link: string }) => {
  const sliceString = link.split('/')
  const [url] = createSignal(sliceString.slice(-1).pop() ?? '')
  const state = createQuery(
    () => ['nameCharacter', url()],
    () => fetchData(url())
  )

  return (
    <Switch fallback={<>Loading...</>}>
      <Match when={state.isLoading}>
        <li>Loading...</li>
      </Match>
      <Match when={state.data?.name}>
        <li class='flex gap-x-2 items-center '>
          <TbCircleDotFilled color='#38bdf8' />
          {state.data?.name}
        </li>
      </Match>
    </Switch>
  )
}
