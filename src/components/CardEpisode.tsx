import { Results } from '../interfaces/episodes'
import { List } from './List'

export const CardEpisode = ({
  air_date,
  id,
  name,
  characters
}: Results) => {
  return (
    <div class='border cursor-pointer border-sky-400 h-52 w-80 overflow-hidden rounded-md p-4'>
      <div class='flex flex-col gap-y-2'>
        <span class='font-bold flex gap-2'>
          Episode Number: <p class='font-light'># {id}</p>
        </span>
        <span class='font-bold flex gap-2'>
          {' '}
          Episode Name: <p class='font-light'>{name}</p>{' '}
        </span>
        <span class='font-bold flex gap-2'>
          {' '}
          Air Date: <p class='font-light'>{air_date}</p>
        </span>
        <span class=' flex gap-2 w-full h-40 flex-col overflow-hidden overflow-y-scroll '>
          <span class='text-sm sticky top-0 bg-sky-600 px-2 font-bold'>Characters saw in the episode:</span>
          <ul class='gap-y-2 flex flex-col '>
            {characters.map((value) => (
             <List link={value} /> 
            ))}
          </ul>
        </span>
      </div>
    </div>
  )
}
