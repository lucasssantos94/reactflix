import { ThemeProvider } from '@app/contexts/ThemeProvider'
import { NavHeader } from '@views/components/NavHeader'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <ThemeProvider>
      <h1>reactflix</h1>
      <NavHeader />
      <Outlet />
    </ThemeProvider>
  )
}

export default App
