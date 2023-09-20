import { AiFillLinkedin } from 'solid-icons/ai'
import { useCommon } from './Provider'
import { ImGithub } from 'solid-icons/im'

export const ListNetwork = () => {
  const [state] = useCommon()
  return (
    <aside class=' h-full flex items-center justify-center'>
      {state.open && (
        <ul class='flex flex-col gap-y-2 animate-[fadeIn_1s]'>
          <li>
            <a href='https://github.com/c4miloarriagada' target='_blank'>
              <ImGithub size={45} fill='#ffff' class='cursor-pointer' />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/camilo-arriagada-vallejos/'
              target='_blank'
            >
              <AiFillLinkedin size={45} fill='#ffff' class='cursor-pointer' />
            </a>
          </li>
        </ul>
      )}
    </aside>
  )
}
