/* eslint-disable react-refresh/only-export-components */
import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import type { RenderOptions } from '@testing-library/react'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Add any providers here
function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>
}

function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return rtlRender(ui, { wrapper: Providers, ...options })
}

// Re-export everything
export * from '@testing-library/react'

// Override render method
export { render }
