import { AiOutlineLoading3Quarters } from 'solid-icons/ai'

export const Loading = () => {
  return (
    <div class='fixed left-0 top-0  z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-40 py-10 animate-none'>
      <AiOutlineLoading3Quarters
        class='animate-spin transition-all'
        fill='#ffff'
      />
    </div>
  )
}
