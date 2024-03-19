import {
  ActionButtonGroup,
  Content,
  DraggableTopBar,
  Home,
  RootLayout,
  Search,
  SideBar,
  UserPlayList
} from '@renderer/components'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

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
                  <UserPlayList className="mt-2 border-t border-t-white/20" />
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
