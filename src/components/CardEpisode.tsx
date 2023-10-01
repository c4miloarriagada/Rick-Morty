import { Results } from '../interfaces/episodes'
import { List } from './List'

export const CardEpisode = ({
  air_date,
  id,
  name,
  characters
}: Results) => {
  return (
    <div class='border cursor-pointer border-sky-400 h-40 w-60 overflow-hidden rounded-md p-4'>
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
        <span class='bg-black flex gap-2 w-full h-12 overflow-hidden overflow-y-scroll'>
          <ul>
            {characters.map((value) => (
              <List link={value} />
            ))}
          </ul>
        </span>
      </div>
    </div>
  )
}
