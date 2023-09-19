import { TbBrandSolidjs } from 'solid-icons/tb'

export const Footer = () => {
  return (
    <footer class='bg-sky-950  border-t-2 border-sky-300 w-full h-20  flex justify-center items-center'>
      <span class='flex items-center  gap-1 font-thin text-xs border rounded-md p-1 text-white border-sky-300'>
        build on top of <TbBrandSolidjs class='text-sky-400 fill-sky-400 ' />
      </span>
    </footer>
  )
}
