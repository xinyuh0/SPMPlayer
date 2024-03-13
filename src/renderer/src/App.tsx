import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { ActionButtonGroup, Content, DraggableTopBar, RootLayout, SideBar } from './components'
import { Home, Search } from './components/pages'

const queryClient = new QueryClient()

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DraggableTopBar />
        <Routes>
          {/* Layout Routes */}
          <Route
            element={
              <RootLayout>
                <SideBar className="px-2">
                  <ActionButtonGroup className="flex flex-col justify-start items-center" />
                </SideBar>
                <Content className="border-l bg-zinc-900/50 border-l-white/20">
                  {/* child is rendered at <Outlet /> */}
                  <Outlet />
                </Content>
              </RootLayout>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />}>
              <Route path=":query" element={<Search />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
