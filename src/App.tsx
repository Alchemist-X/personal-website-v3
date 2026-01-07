import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Miscellaneous from './pages/Miscellaneous'
import Playground from './pages/Playground'
import NavBar from './components/NavBar'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-[#0a0a0a] dark:bg-[#0a0a0a] light:bg-gray-50 transition-colors">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/misc" element={<Miscellaneous />} />
            <Route path="/playground" element={<Playground />} />
          </Routes>
          <NavBar />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

