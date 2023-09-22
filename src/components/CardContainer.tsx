import { For, Match, Switch } from 'solid-js'
import { createQuery } from '@tanstack/solid-query'
import { rickAndMortyApi } from '../api/rick&MortyApi'
import { Options } from '../interfaces/options'
import { useNavigate } from '@solidjs/router'

const getOptions = async (): Promise<Options> => {
  const { data } = await rickAndMortyApi.get<Options>('')
  return data
}

// const imgUrl = [
//   'https://res.cloudinary.com/dwtkwakbc/image/upload/v1693626436/670_ri51qq.webp',
//   'https://res.cloudinary.com/dwtkwakbc/image/upload/v1693626047/S3e7_Citadel_reconstruction_f00ixg.webp',
//   'https://res.cloudinary.com/dwtkwakbc/image/upload/v1693626209/YHAUBUYW75FZVLG4Z4WL5S6LMY_chfcos.avif'
// ]

export const CardContainer = () => {
  const query = createQuery(() => ['options'], getOptions)
  const navigate = useNavigate()
  const handleClick = (route: string) => {
    navigate(route)
  }

  return (
    <section class='text-white   p-7 gap-7 pt-24 w-4/5 grid lg:grid-cols-2 lg:grid-rows-2  md:grid-rows-3 md:grid-cols-1 sm:pt-9 sm:grid-rows-3 sm:grid-cols-1 max-md:pt-9'>
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
                class='border border-sky-400 sm:w-full rounded-md flex shadow-xl h-24 justify-between cursor-pointer transition-transform hover:skew-x-3 overflow-hidden'
                >
                <div
                  class={`bg-[url('https://res.cloudinary.com/dwtkwakbc/image/upload/v1693626436/670_ri51qq.webp')]   bg-cover  bg-center h-full md:h-40 w-full   bg-no-repeat `}
                ></div>
                <div class=' flex w-1/2 justify-center items-center'>
                  <h3 class='font-bold text-xl uppercase max-sm:text-sm max-sm:px-2'>{options}</h3>
                </div>
              </div>
            )}
          </For>
        </Match>
      </Switch>
    </section>
  )
}
