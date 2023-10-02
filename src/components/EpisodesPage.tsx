import { For, Match, Switch, createEffect, createSignal } from 'solid-js'
import { createInfiniteQuery } from '@tanstack/solid-query'
import { rickAndMortyApi } from '../api/rick&MortyApi'
import { Loading } from './Loading'
import { CardEpisode } from './CardEpisode'
import type { Episode, Results } from '../interfaces/episodes'
import { useIntersectionObserver } from '../hook/useIntersectionObserver'

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
  const isIntercesecting = useIntersectionObserver('#intersection')
  const state = infinityQuery()
  const [episode, setEpisode] = createSignal<Results[] | undefined>(
    state.data?.pages?.flatMap((e) => e.results)
  )

    createEffect(() => {
    if (isIntercesecting()) {
      state.fetchNextPage()
      setEpisode(state.data?.pages?.flatMap((resp) => resp.results))
    }
  })
  return (
    <div class='w-full text-white h-[60rem] overflow-scroll overflow-x-hidden max-sm:pl-4'>
      <h1 class='flex justify-center font-black text-7xl max-sm:text-3xl text-focus-in'>Episodes</h1>
      <section class='flex gap-5 py-5 justify-center flex-wrap px-2 max-sm:pr-0'>
        <Switch>
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
      <div class=' h-11 w-11   bottom-0 absolut'  id='intersection'></div>
    </div>
  )
}
