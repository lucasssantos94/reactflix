import { ThemeProvider } from '@app/contexts/ThemeProvider'
import { LoadingSpinner } from '@views/components/LoadingSpinner'
import { NavHeader } from '@views/components/NavHeader'
import { Suspense } from 'react'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <ThemeProvider>
      <h1>reactflix</h1>
      <NavHeader />
      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
