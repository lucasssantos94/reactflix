import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './views/styles/index.css'

import { router } from '@app/router'
import { RouterProvider } from 'react-router'

const rootElement = document.getElementById('root')
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
} else {
  throw new Error('Root element not found')
}
