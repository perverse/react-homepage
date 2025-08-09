import Terminal from './components/sections/Terminal'
import CyberpunkBackground from './components/ui/CyberpunkBackground'

function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      <div className="fixed inset-0 z-0">
        <CyberpunkBackground />
      </div>
      <div className="relative z-10 h-full">
        <Terminal />
      </div>
    </main>
  )
}

export default App
