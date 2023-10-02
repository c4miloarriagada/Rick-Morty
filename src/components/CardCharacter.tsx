import { For, Match, Switch } from 'solid-js'
import { TbPointFilled } from 'solid-icons/tb'
import { Results } from '../interfaces/characters'
import { ListEpisodes } from './ListEpisodes'

export const CardCharacter = ({
  image,
  name,
  episode,
  gender,
  origin,
  status,
  location,
  species
}: Results) => {
  return (
    <>
      <div class='h-64 w-[45rem] animate-[fadeIn_1s] gap-9  relative flex border border-sky-400 overflow-hidden  rounded-md text-white   bg-sky-950 shadow-md    cursor-pointer transition-all max-sm:scale-75 max-sm:h-[20rem]'>
        <div class='h-64 w-1/2'>
          <img
            src={image}
            class='object-center  w-full  h-64  max-sm:h-[20rem] '
            alt='img'
          />
        </div>
        <div class='h-64  w-1/2 flex flex-col items-center'>
            <span class='text-4xl w-full text-sky-500 font-black  flex justify-center my-3 max-sm:text-xl max-sm:pr-1'>{name}</span>
          <div class='max-sm:h-3  w-full  flex flex-col  gap-y-2'>
            <span class='font-bold  gap-2 items-center flex'>
              Status:
              <Switch fallback={<TbPointFilled class='text-gray-500 ' />}>
                <Match when={status === 'Alive'}>
                  <TbPointFilled class='text-green-500 ' />
                </Match>
                <Match when={status === 'Dead'}>
                  <TbPointFilled class='text-red-500 ' />
                </Match>
              </Switch>
              <span
                class={`font-bold  flex max-sm:absolute max-sm:-top-5  max-sm:${
                  species.length > 5 ? 'text-sm' : ''
                }   max-sm:w-[20rem]`}
              >
                Specie: {species}{' '}
              </span>
            </span>
            <span class='font-bold  flex '>Gender: {gender}</span>
            <span class='font-bold  flex '>Origin: {origin.name}</span>
            <span class='font-bold  flex'>Location: {location.name}</span>
             <div class='h-16 w-4/5 '>
              <ul class='h-20 gap-2  flex  col-span-4  flex-col overflow-auto  overflow-x-hidden '>
                <p class='font-bold  sticky top-0 bg-sky-950 pt-1'>
                  Episodes:
                </p>

                <For each={episode}>
                  {(cap) => (
                   <ListEpisodes link={cap}/>
                  )}
                </For>
              </ul>
              </div>   
          </div>
        </div>
      </div>
    </>
  )
}
