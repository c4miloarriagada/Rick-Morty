import { createQuery } from '@tanstack/solid-query'
import { rickAndMortyApi } from '../api/rick&MortyApi'
import { Results } from '../interfaces/episodes'
import { Match, Switch, createSignal } from 'solid-js'
import { FiTv } from 'solid-icons/fi'

const fetchData = async (number: string): Promise<Results | undefined> => {
  if (number) {
    const { data } = await rickAndMortyApi.get<Results>(
      `episode/${number}`
    )

    return data
  }
}

export const ListEpisodes = ({ link }: { link: string }) => {
  const sliceString = link.split('/')
  const [url] = createSignal(sliceString.slice(-1).pop() ?? '')
  const state = createQuery(
    () => ['nameEpisode', url()],
    () => fetchData(url())
  )  

  return (
    <Switch fallback={<>Loading...</>}>
      <Match when={state.isLoading}>
        <li>Loading...</li>
      </Match>
      <Match when={state.data?.name}>
        <li class='flex w-max items-center '>
        <FiTv class='mr-1 text-gray-700-400 text-sky-300' />
          {state.data?.name}
        </li>
      </Match>
    </Switch>
  )
}
