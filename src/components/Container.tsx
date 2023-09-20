import { useCommon } from './Provider'
import { Router, Route, Routes } from '@solidjs/router'
import { Landing } from './Landing'
import { CharacterPage } from './CharacterPage'
import { EpisodesPage } from './EpisodesPage'

export const Container = () => {
  const [state] = useCommon()

  return (
    <main
      class={`${
        state.open ? 'col-span-10 ' : 'col-span-11 '
      } transition-all ease-in duration-300`}
    >
      <div class='flex overflow-x-auto -z-10 h-[calc(100vh_-_9rem)]  flex-col items-center bg-sky-950'>
        <Router>
          <Routes>
            <Route path={'/Rick-Morty/'} component={Landing} />
            <Route path={'/Rick-Morty/characters'} component={CharacterPage} />
            <Route path={'/Rick-Morty/episodes'} component={EpisodesPage} />
          </Routes>
        </Router>
      </div>
    </main>
  )
}
