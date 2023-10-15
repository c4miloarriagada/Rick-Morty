import { Router, Route, Routes } from '@solidjs/router'
import { Landing } from './Landing'
import { CharacterPage } from './CharacterPage'
import { EpisodesPage } from './EpisodesPage'
import { LocationPage } from './LocationPage'

export const Container = () => {
  
  return (
    <main
      class={`col-span-11  transition-all ease-in duration-300`}
    >
      <div class='flex overflow-x-hidden pt-14 -z-10 h-[calc(100vh_-_9rem)]  flex-col items-center bg-sky-950'>
        <Router>
          <Routes>
            <Route path={'/Rick-Morty/'} component={Landing} />
            <Route path={'/Rick-Morty/characters'} component={CharacterPage} />
            <Route path={'/Rick-Morty/episodes'} component={EpisodesPage} />
            <Route path={'/Rick-Morty/locations'} component={LocationPage}/>
          </Routes>
        </Router>
      </div>
    </main>
  )
}
