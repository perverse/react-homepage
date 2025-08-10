import React, { createContext, useContext, useState, ReactNode } from 'react'
import { useTheme } from './ThemeContext'

export type BackgroundType = 'line' | 'matrix' | 'hex'

interface BackgroundContextType {
  currentBackground: BackgroundType
  setBackground: (background: BackgroundType) => void
}

const BackgroundContext = createContext<BackgroundContextType | undefined>(undefined)

export const useBackground = () => {
  const context = useContext(BackgroundContext)
  if (!context) {
    throw new Error('useBackground must be used within a BackgroundProvider')
  }
  return context
}

interface BackgroundProviderProps {
  children: ReactNode
}

export const BackgroundProvider: React.FC<BackgroundProviderProps> = ({ children }) => {
  const { currentTheme, setTheme } = useTheme()
  const [currentBackground, setCurrentBackground] = useState<BackgroundType>(() => {
    // Try to get background from localStorage, default to 'hex' instead of 'line'
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('background')
      if (saved && (saved === 'line' || saved === 'matrix' || saved === 'hex')) {
        return saved
      }
    }
    return 'hex' // Changed from 'line' to 'hex'
  })

  const setBackground = (background: BackgroundType) => {
    setCurrentBackground(background)
    // Automatically switch theme to match background
    setTheme(background)
  }

  // Sync background with theme on theme changes (e.g., from localStorage)
  React.useEffect(() => {
    setCurrentBackground(currentTheme as BackgroundType)
  }, [currentTheme])

  return (
    <BackgroundContext.Provider value={{ currentBackground, setBackground }}>
      {children}
    </BackgroundContext.Provider>
  )
}
