import { For, Match, Switch, createEffect, createSignal } from 'solid-js'
import { createInfiniteQuery } from '@tanstack/solid-query'
import { rickAndMortyApi } from '../api/rick&MortyApi'
import { Loading } from './Loading'
import { CardEpisode } from './CardEpisode'
import type { Episode, Results } from '../interfaces/episodes'

const fetchData = async (page: string): Promise<Episode> => {
  const { data } = await rickAndMortyApi.get<Episode>(`episode?page=${page}`)
  return data
}

const infinityQuery = () => {
  return createInfiniteQuery({
    queryKey: () => ['eposide'],
    queryFn: async ({ pageParam = 1 }) => fetchData(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.info.next?.split('=')[1] ?? undefined
  })
}

export const EpisodesPage = () => {
  const state = infinityQuery()
  const [episode, ] = createSignal<Results[] | undefined>(
    state.data?.pages?.flatMap((e) => e.results)
  )

  createEffect(() => {})

  return (
    <div class='w-full text-white h-[60rem] overflow-scroll overflow-x-hidden '>
      <h1 class='flex justify-center font-black text-7xl'>Episodes</h1>
      <section class='flex gap-5 py-5 justify-center flex-wrap animate-[fadeIn_1s]'>
        <Switch fallback={<Loading />}>
          <Match when={state.isLoading}>
            <Loading />
          </Match>
          <Match when={episode()}>
            <For each={episode()}>
              {(episodes) => <CardEpisode {...episodes} />}
            </For>
          </Match>
        </Switch>
      </section>
      <div id='intersection'></div>
    </div>
  )
}
