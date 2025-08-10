import Terminal from './components/sections/Terminal'
import CyberpunkBackground from './components/ui/CyberpunkBackground'
import MatrixBackground from './components/ui/MatrixBackground'
import HexGridBackground from './components/ui/HexGridBackground'
import { ThemeProvider } from './contexts/ThemeContext'
import { BackgroundProvider, useBackground } from './contexts/BackgroundContext'

function AppContent() {
  const { currentBackground } = useBackground()

  const BackgroundComponent = currentBackground === 'matrix'
    ? MatrixBackground
    : currentBackground === 'hex'
      ? HexGridBackground
      : CyberpunkBackground

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
      <BackgroundProvider>
        <AppContent />
      </BackgroundProvider>
    </ThemeProvider>
  )
}

export default App
