import { QueryClient, QueryClientProvider } from '@tanstack/solid-query'
import { Header } from './components/Header'
import { Container } from './components/Container'
import { SideBar } from './components/SideBar'
import { Footer } from './components/Footer'
import { CommonProvider } from './components/Provider'

const queryClient = new QueryClient()

export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Header />
        <div class='grid grid-cols-12 bg-sky-950'>
          <CommonProvider>
            <SideBar />
            <Container />
          </CommonProvider>
        </div>
        <Footer />
      </QueryClientProvider>
    </>
  )
}
