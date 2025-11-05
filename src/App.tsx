import { ThemeProvider } from '@app/contexts/ThemeProvider'
import { Header } from '@views/components/Header'
import { LoadingSpinner } from '@views/components/LoadingSpinner'
import { Suspense } from 'react'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <ThemeProvider>
      <Header />

      <Suspense fallback={<LoadingSpinner />}>
        <Outlet />
      </Suspense>
    </ThemeProvider>
  )
}

export default App
