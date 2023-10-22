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
      <div class='h-80 w-[45rem] animate-[fadeIn_1s] gap-9  max-sm:gap-3 relative flex border border-sky-400 overflow-hidden  rounded-md text-white   bg-sky-950 shadow-md    cursor-pointer transition-all max-sm:scale-90 max-sm:h-[23rem] '>
        <div class='h-full w-1/2 max-sm:flex max-sm:items-center '>
          <img
            src={image}
            class='object-center  w-full  h-80   max-sm:w-full'
            alt='img'
          />
        </div>
        <div class='h-64  w-1/2 flex flex-col items-center'>
          <span class='text-4xl w-full text-sky-500 font-black  flex justify-center my-3 max-sm:text-xl max-sm:pr-1'>
            {name}
          </span>
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
                <p class='font-bold  sticky top-0 bg-sky-400 p-1 border-white border mb-1 '>Episodes:</p>
              <ul class='h-24 gap-2  flex  col-span-4  flex-col overflow-auto  overflow-x-auto '>

                <For each={episode}>{(cap) => <ListEpisodes link={cap} />}</For>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
