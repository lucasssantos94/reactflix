import { ThemeProvider } from '@app/contexts/ThemeProvider'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { Header } from '@views/components/Header'
import { LoadingSpinner } from '@views/components/LoadingSpinner'
import { Suspense } from 'react'
import { Outlet } from 'react-router'
import { QueryProvider } from './app/contexts/QueryProvider'
import ModalTrailer from './views/components/ModalTrailer'

const App = () => {
  return (
    <QueryProvider>
      <ThemeProvider>
        <div className='flex flex-col min-h-screen'>
          <Header />
          <main className='flex-1'>
            <Suspense fallback={<LoadingSpinner />}>
              <Outlet />
            </Suspense>
          </main>
          <footer className='flex items-center justify-center p-6'>
            <h3>@2023 reactflix</h3>
          </footer>
          <ModalTrailer />
        </div>
      </ThemeProvider>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  )
}

export default App
