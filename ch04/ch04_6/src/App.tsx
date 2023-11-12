import ResponsiveContextTest from './pages/ResponsiveContextTest'
import { ResponsiveProvider } from './contexts/ResponsiveContext'

export default function App() {
  return (
    <ResponsiveProvider>
      <main>
        <ResponsiveContextTest/>
      </main>
    </ResponsiveProvider>
  )
}