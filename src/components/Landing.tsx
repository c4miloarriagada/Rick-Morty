import { Hero } from './Hero'
import { CardContainer } from './CardContainer'

export const Landing = () => {
  return (
    <div class='bounce-in-right w-full pt-3 h-full flex flex-col items-center justify-center'>
      <Hero />
      <CardContainer />
    </div>
  )
}
