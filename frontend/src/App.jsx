import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  const [page, setPage] = useState('home')

  return (
    <div id="app">
      <nav style={{ marginBottom: 20 }}>
        <button onClick={() => setPage('home')}>Home</button>{' '}
        <button onClick={() => setPage('projects')}>Projects</button>
      </nav>

      {page === 'home' && <Home />}
      {page === 'projects' && <Projects />}
    </div>
  )
}

export default App