import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ActionButtonGroup, Content, DraggableTopBar, RootLayout, SideBar } from './components'
import { Home, Search } from './components/pages'

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <DraggableTopBar />
      <RootLayout>
        <SideBar className="p-2">
          <ActionButtonGroup className="flex flex-col justify-start items-center" />
        </SideBar>
        <Content className="border-l bg-zinc-900/50 border-l-white/20">
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/search" Component={Search} />
          </Routes>
        </Content>
      </RootLayout>
    </BrowserRouter>
  )
}

export default App
