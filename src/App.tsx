import { ThemeProvider } from '@app/contexts/ThemeProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from '@views/components/Header'
import { LoadingSpinner } from '@views/components/LoadingSpinner'
import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { QueryProvider } from './app/contexts/QueryProvider'

const App = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <Header />

        <Suspense fallback={<LoadingSpinner />}>
          <Outlet />
        </Suspense>
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  )
}

export default App
