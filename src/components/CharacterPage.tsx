import { For, Switch, createEffect, createSignal, Match } from 'solid-js'
import { createInfiniteQuery } from '@tanstack/solid-query'
import { rickAndMortyApi } from '../api/rick&MortyApi'
import { CardCharacter } from './CardCharacter'
import { useIntersectionObserver } from '../hook/useIntersectionObserver'
import { Loading } from './Loading'
import type { Character, Results } from '../interfaces/characters'

const fetchData = async (page: string): Promise<Character> => {
  const { data } = await rickAndMortyApi.get<Character>(
    `character/?page=${page}`
  )
  return data
}

const infinityQuery = () => {
  return createInfiniteQuery({
    queryKey: () => ['characters'],
    queryFn: async ({ pageParam = 0 }) => fetchData(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.info.next?.split('=')[1] ?? undefined
  })
}

export const CharacterPage = () => {
  const isIntercesecting = useIntersectionObserver('#intersect')
  const state = infinityQuery()
  const [characters, setCharacter] = createSignal<Results[] | undefined>(
    state.data?.pages?.flatMap((c) => c.results)
  )


  createEffect(() => {
    if (isIntercesecting()) {
      state.fetchNextPage()
      setCharacter(state.data?.pages?.flatMap((resp) => resp.results))
    }
  })

  return (
    <div class='w-full text-white h-[60rem] overflow-scroll overflow-x-hidden '>
      <h1 class='flex justify-center font-black text-7xl'>Characters</h1>

      <section class='flex gap-5 py-5 justify-center flex-wrap '>
        <Switch fallback={<Loading />}>
          <Match when={state.isLoading}>
            <Loading />
          </Match>
          <Match when={state.data}>
            <For each={characters()}>
              {(data) => <CardCharacter {...data} />}
            </For>
          </Match>
        </Switch>
      </section>
      <div class=' h-11 w-11   bottom-0 absolut' id='intersect'></div>
    </div>
  )
}
