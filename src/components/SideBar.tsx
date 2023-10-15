// import { createQuery } from '@tanstack/solid-query'
import { useCommon } from './Provider'
import { TbMenu2 } from 'solid-icons/tb'
import { VsClose } from 'solid-icons/vs'
import { ListNetwork } from './ListNetwork'

export const SideBar = () => {
  const [state, { open }] = useCommon()
  // const query = createQuery(() => [''])

  const handleClick = () => {
    open && open()
  }

  return (
    <nav
      class={`bg-sky-900 max-sm:z-30  ${
        state.open ? 'col-span-1 w-36 ' : 'col-span-1 w-14'
      } transition-all ease-in-out duration-300  z-10  flex flex-col items-center hover:bg-sky-800`}
    >
      <div class='w-full min-h-full transition-all  ease-in-out duration-300'>
        {state.open ? (
          <div class='flex justify-end  pr-6 mt-5 '>
            <VsClose
              onClick={handleClick}
              class='hover:cursor-pointer animate-[fadeIn_1s] text-sky-400'
              size={25}
            />
          </div>
        ) : (
          <div class=' class="mt-5 flex  justify-center mt-5'>
            <TbMenu2
              onClick={handleClick}
              class='hover:cursor-pointer animate-[fadeIn_1s]  text-sky-400'
              size={30}
            />
          </div>
        )}
        <ListNetwork />
      </div>
    </nav>
  )
}
