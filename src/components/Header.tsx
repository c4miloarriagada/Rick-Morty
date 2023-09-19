import { Logo } from './Logo'

export const Header = () => {
  return (
    <header class='bg-sky-950 h-16 flex items-center shadow-md border-b-2 border-sky-300'>
      <div class='mx-5 '>
        <Logo />
      </div>
    </header>
  )
}
