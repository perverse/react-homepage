import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'

export type ThemeType = 'line' | 'matrix' | 'hex'

interface ThemeColors {
  '--terminal-bg': string
  '--terminal-header-bg': string
  '--terminal-border': string
  '--terminal-text': string
  '--terminal-prompt': string
  '--terminal-command': string
  '--terminal-output': string
  '--terminal-error': string
  '--terminal-warning': string
  '--terminal-success': string
  '--terminal-input-bg': string
  '--terminal-grid-line': string
  '--terminal-glow': string
}

const themes: Record<ThemeType, ThemeColors> = {
  line: {
    '--terminal-bg': 'rgba(8, 8, 16, 0.85)',
    '--terminal-header-bg': 'rgba(45, 50, 65, 0.9)',
    '--terminal-border': '#292e42',
    '--terminal-text': '#a9b1d6',
    '--terminal-prompt': '#7aa2f7',
    '--terminal-command': '#7dcfff',
    '--terminal-output': '#c0caf5',
    '--terminal-error': '#f7768e',
    '--terminal-warning': '#e0af68',
    '--terminal-success': '#9ece6a',
    '--terminal-input-bg': 'rgba(8, 8, 16, 0.80)',
    '--terminal-grid-line': 'rgba(41, 46, 66, 0.1)',
    '--terminal-glow': `
      0 0 20px rgba(41, 46, 66, 0.3),
      0 0 40px rgba(77, 204, 255, 0.15),
      0 0 80px rgba(77, 204, 255, 0.08)
    `
  },
  matrix: {
    '--terminal-bg': 'rgba(2, 8, 2, 0.70)',
    '--terminal-header-bg': 'rgba(5, 15, 5, 0.85)',
    '--terminal-border': '#1a4d1a',
    '--terminal-text': '#00ff41',
    '--terminal-prompt': '#00cc33',
    '--terminal-command': '#00ff66',
    '--terminal-output': '#00dd44',
    '--terminal-error': '#ff3333',
    '--terminal-warning': '#ffaa00',
    '--terminal-success': '#00ff88',
    '--terminal-input-bg': 'rgba(2, 8, 2, 0.65)',
    '--terminal-grid-line': 'rgba(41, 46, 66, 0.1)',
    '--terminal-glow': `
      0 0 20px rgba(0, 255, 65, 0.2),
      0 0 40px rgba(0, 255, 65, 0.1),
      0 0 80px rgba(0, 255, 65, 0.05)
    `
  },
  hex: {
    '--terminal-bg': 'rgba(8, 8, 16, 0.85)',
    '--terminal-header-bg': 'rgba(45, 50, 65, 0.9)',
    '--terminal-border': '#2b2442',
    '--terminal-text': '#d6d0ff',
    '--terminal-prompt': '#a78bfa',
    '--terminal-command': '#8fbafc',
    '--terminal-output': '#e2ddff',
    '--terminal-error': '#ff6b8f',
    '--terminal-warning': '#f1c078',
    '--terminal-success': '#8be7a1',
    '--terminal-input-bg': 'rgba(8, 8, 16, 0.80)',
    '--terminal-grid-line': 'rgba(41, 46, 66, 0.1)',
    '--terminal-glow': `
      0 0 20px rgba(41, 46, 66, 0.3),
      0 0 40px rgba(77, 204, 255, 0.15),
      0 0 80px rgba(77, 204, 255, 0.08)
    `
  }
}

interface ThemeContextType {
  currentTheme: ThemeType
  setTheme: (theme: ThemeType) => void
  applyTheme: (theme: ThemeType) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeType>(() => {
    // Try to get theme from localStorage, default to 'hex' instead of 'line'
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved && (saved === 'line' || saved === 'matrix' || saved === 'hex')) {
        return saved
      }
    }
    return 'hex' // Changed from 'line' to 'hex'
  })

  const applyTheme = (theme: ThemeType) => {
    const root = document.documentElement
    const themeColors = themes[theme]
    
    Object.entries(themeColors).forEach(([property, value]) => {
      root.style.setProperty(property, value)
    })
  }

  const setTheme = (theme: ThemeType) => {
    setCurrentTheme(theme)
    applyTheme(theme)
    
    // Save to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme)
    }
  }

  // Apply initial theme on mount
  useEffect(() => {
    applyTheme(currentTheme)
  }, [])

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, applyTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
