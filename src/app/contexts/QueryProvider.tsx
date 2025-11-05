import { queryClient } from '@app/lib/react-query/queryClient'
import { QueryClientProvider } from '@tanstack/react-query'

export const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}
