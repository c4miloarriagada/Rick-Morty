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
      <div class='h-40 animate-[fadeIn_1s] border border-sky-400 overflow-hidden  rounded-md text-white grid grid-cols-12  bg-sky-950 shadow-md w-[45rem]  cursor-pointer transition-all hover:scale-110'>
        <img
          src={image}
          class='object-cover w-[50rem] col-span-4 h-40'
          alt=''
        />
        <div class=' p-2 h-40 col-span-8  w-full '>
          <div class='grid col-span-8 grid-rows-2 h-full'>
            <div class='h-1/2 col-start-1  col-end-8 justify-center flex w-full'>
              <h3 class=' text-5xl'>{name} </h3>
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
              <div class=' col-span-4  w-3/5 pl-2'>
                <ul>
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
                      <span class="font-bold  flex'">Specie: {species} </span>
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
