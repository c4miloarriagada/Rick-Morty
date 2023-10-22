import { Solid } from './Solid'

export const Footer = () => {
  return (
    <footer class='bg-sky-950  border-t-2 border-sky-300 w-full h-20  flex justify-center items-center '>
      <span class='flex max-sm:scale-90    h-10 items-center   font-thin text-xs border rounded-md pl-1 text-white border-sky-300'>
        build on top of  <span class='h-10 w-7 flex ml-1'><Solid/></span> 
      </span>
      
    </footer>
  )
}
