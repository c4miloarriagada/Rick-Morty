import { For, Match, Switch } from 'solid-js'
import { createQuery } from '@tanstack/solid-query'
import { rickAndMortyApi } from '../api/rick&MortyApi'
import { Options } from '../interfaces/options'
import { useNavigate } from '@solidjs/router'

const getOptions = async (): Promise<Options> => {
  const { data } = await rickAndMortyApi.get<Options>('')
  return data
}


export const CardContainer = () => {
  const query = createQuery(() => ['options'], getOptions)
  const navigate = useNavigate()
  const handleClick = (route: string) => {
    navigate(route)
  }
  return (
    <section class='text-white   p-7 gap-7 pt-24  w-4/5 grid lg:grid-cols-2 lg:grid-rows-2  md:grid-rows-3 md:grid-cols-1 sm:pt-9 sm:grid-rows-3 sm:grid-cols-1 max-md:pt-9'>
      <Switch>
        <Match when={query.isLoading}>
          <For each={Array.from({ length: 3 })}>
            {() => (
              <div class='border border-sky-400 shadow rounded-md p-4 h-full w-full'>
                <div class='animate-pulse flex space-x-4'>
                  <div class=' bg-slate-700 h-20 w-1/2'></div>
                  <div class='flex-1 space-y-6 py-1'>
                    <div class='h-2 bg-slate-700 rounded'></div>
                    <div class='h-2 bg-slate-700 rounded'></div>
                    <div class='h-2 bg-slate-700 rounded'></div>
                  </div>
                </div>
              </div>
            )}
          </For>
        </Match>
        <Match when={query.isSuccess}>
          <For each={query.data && Object.keys(query.data)}>
            {(options) => (
              <div
                onclick={() => handleClick(options)}
                class='border border-sky-400 sm:w-full rounded-md flex shadow-xl h-24 justify-between cursor-pointer transition-transform bounce-in-right overflow-hidden  hover:bg-sky-700'
              >     
                  <div
                    class={`${options === 'characters' && 'bg-characters-' || options === 'episodes' && 'bg-episodes-' || options === 'locations' && 'bg-locations-'} bg-left  md:h-40 bg-[length:350px_200px] w-full  bg-no-repeat  max-sm:bg-cover`}
                  ></div> 
                <div class=' flex w-1/2 justify-center items-center'>
                  <h3 class='font-bold text-xl uppercase max-sm:text-sm max-sm:px-2'>
                    {options}{' '}
                  </h3>
                </div>
              </div>
            )}
          </For>
        </Match>
      </Switch>
    </section>
  )
}
