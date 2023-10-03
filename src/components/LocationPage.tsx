import { createInfiniteQuery } from '@tanstack/solid-query'
import { rickAndMortyApi } from '../api/rick&MortyApi'
import { Locations, Results } from '../interfaces/locations'
import { useIntersectionObserver } from '../hook/useIntersectionObserver'
import { For, Match, Switch, createEffect, createSignal } from 'solid-js'
import { Loading } from './Loading'
import { CardLocation } from './CardLocation'

const fetchData = async (page: string): Promise<Locations> => {
  const { data } = await rickAndMortyApi.get<Locations>(
    `location/?page=${page}`
  )
  return data
}

const infinityQuery = () => {
  return createInfiniteQuery({
    queryKey: () => ['locations'],
    queryFn: async ({ pageParam = 0 }) => fetchData(pageParam),
    getNextPageParam: (lastPage) =>
      lastPage.info.next?.split('=')[1] ?? undefined
  })
}

export const LocationPage = () => {
  const isIntercesecting = useIntersectionObserver('#intersect')
  const state = infinityQuery()
  const [locations, setLocations] = createSignal<Results[] | undefined>(
    state.data?.pages.flatMap((locations) => locations.results)
  )
  createEffect(() => {
    if (isIntercesecting()) {
      state.fetchNextPage
    }
  })

  return (
    <div class='w-full text-white h-[60rem] overflow-scroll overflow-x-hidden '>
      <h1 class='flex justify-center font-black text-7xl max-sm:text-3xl  text-focus-in  '>
        Locations
      </h1>

      <section class='flex gap-5 py-5 justify-center flex-wrap max-sm:gap-y-0'>
        <Switch fallback={<Loading />}>
          <Match when={state.isLoading}>
            <Loading />
          </Match>
          <Match when={locations()}>
            <For each={locations()}>{(data) => <CardLocation {...data} />}</For>
          </Match>
        </Switch>
      </section>
      <div class=' h-11 w-11   bottom-0 absolut' id='intersect'></div>
    </div>
  )
}
