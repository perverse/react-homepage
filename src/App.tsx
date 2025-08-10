import Terminal from '@/components/sections/Terminal'
import CyberpunkBackground from '@/components/ui/CyberpunkBackground'
import AuroraBorealisBackground from '@/components/ui/AuroraBorealisBackground'
import MatrixBackground from '@/components/ui/MatrixBackground'
import HexGridBackground from '@/components/ui/HexGridBackground'
import KelpBackground from '@/components/ui/KelpBackground'
import { ThemeProvider, useTheme } from '@/contexts/ThemeContext'
import type { ThemeType } from '@/contexts/ThemeContext'
import type { ComponentType } from 'react'

const BackgroundComponentMap: Record<ThemeType, ComponentType> = {
  line: CyberpunkBackground,
  matrix: MatrixBackground,
  hex: HexGridBackground,
  aurora: AuroraBorealisBackground,
  kelp: KelpBackground,
}

function AppContent() {
  const { currentTheme } = useTheme()
  const BackgroundComponent = BackgroundComponentMap[currentTheme] ?? CyberpunkBackground

  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <BackgroundComponent />
      </div>
      <div className="relative z-10 h-full">
        <Terminal />
      </div>
    </main>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
