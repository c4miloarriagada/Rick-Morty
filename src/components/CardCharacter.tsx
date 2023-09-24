import { For, Match, Switch } from 'solid-js'
import { TbPointFilled } from 'solid-icons/tb'
import { FiTv } from 'solid-icons/fi'
import { Results } from '../interfaces/characters'

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
      <div class='h-44 max-sm:h-52 animate-[fadeIn_1s] border border-sky-400 overflow-hidden max-sm:ml-7 rounded-md text-white grid grid-cols-12  bg-sky-950 shadow-md w-[45rem] max-sm:scale-90  cursor-pointer transition-all'>
        <img
          src={image}
          class='object-center max-sm:scale-100 max-sm:h-52  w-[50rem] col-span-4 h-44  max-sm:object-fill  '
          alt='img'
        />
        <div class=' p-2  max-sm:p-1 h-40 col-span-8  w-full '>
          <div class='grid col-span-8 grid-rows-2  h-full max-sm:items-center max-sm:pt-4'>
            <div class='h-1/2 col-start-1  col-end-8 justify-center max-sm:justify-start  flex w-full max-sm:w-[5rem] max-sm:relative'>
              <h3 class={`${name.length > 18 ? 'text-2xl' : `text-5xl`} max-sm:text-sm  max-sm:absolute max-sm:-top-5 max-sm:ml-1 font-bold text-shadow-drop-bottom` }>{name} </h3>
            </div>
            <div class=' h-full col-span-8 w-full gap-2  flex'>
              <ul class='h-16 gap-1  flex  w-2/5 col-span-4 pl-3 flex-col overflow-auto  overflow-x-hidden'>
                <p class='font-bold  sticky top-0 bg-sky-950 pt-1'>
                  Episodes:
                </p>

                <For each={episode}>
                  {(cap) => (
                    <li class='flex max-w-max items-center'>
                      <FiTv class='mr-1 text-gray-700-400 text-sky-300' />{' '}
                      #{' '}
                      {cap.slice(-2).includes('/')
                        ? cap.slice(-1)
                        : cap.slice(-2)}
                    </li>
                  )}
                </For>
              </ul>
              <div class=' col-span-4 w-3/5 pl-2  max-sm:relative' >
                <ul class='max-sm:absolute max-sm:-top-12'>
                  <li>
                    <span class='font-bold  gap-2 items-center flex'>
                      Status:
                      <Switch
                        fallback={<TbPointFilled class='text-gray-500 ' />}
                      >
                        <Match when={status === 'Alive'}>
                          <TbPointFilled class='text-green-500 ' />
                        </Match>
                        <Match when={status === 'Dead'}>
                          <TbPointFilled class='text-red-500 ' />
                        </Match>
                      </Switch>
                      <span class={`font-bold  flex max-sm:absolute max-sm:-top-5  max-sm:${species.length > 5 ?  'text-sm' : ''}   max-sm:w-[20rem]`}>Specie: {species} </span>
                    </span>
                  </li>
                  <li>
                    <span class='font-bold  flex'>Gender: {gender}</span>
                  </li>
                  <li>
                    <span class='font-bold  flex'>Origin: {origin.name}</span>
                  </li>
                  <li>
                    <span class='font-bold  flex'>
                      Location: {location.name}
                    </span>
                  </li>
                  {location.location && (
                    <li>
                      <span class='font-bold  flex'>
                        Location: {location.location}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
