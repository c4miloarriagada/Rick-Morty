import { Logo } from './Logo'
import { Title } from './Title'

export const Header = () => {
  return (
    <header class='bg-sky-950 h-16 flex items-center justify-between overflow-y-hidden  shadow-md border-b-2 border-sky-300'>
      <div class='mx-5 '>
        <Logo />
      </div>
      <div class='flex justify-center lg:h-[10rem] lg:w-[30rem] max-lg:h-[10rem] pt-2 max-lg:w-[20rem] max-md:h-[10rem] max-md:w-[15rem] max-sm:h-36 max-sm:w-h44'>
        <Title />
      </div>
      <div></div>
    </header>
  )
}
