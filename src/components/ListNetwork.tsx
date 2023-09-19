import {  AiFillLinkedin } from 'solid-icons/ai'
import { useCommon } from './Provider'
import { ImGithub } from 'solid-icons/im'

export const ListNetwork = () => {
  const [state] = useCommon()
  return (
    <aside class=' h-full flex items-center justify-center'>
      {state.open && (
        <ul class='flex flex-col gap-y-2 animate-[fadeIn_1s]'>
          <li>
            <ImGithub size={45} fill='#ffff' class='cursor-pointer' />
          </li>
          <li>
            <AiFillLinkedin size={45} fill='#ffff' class='cursor-pointer' />
          </li>
        </ul>
      )}
    </aside>
  )
}
