import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import Home from './pages/Home'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Miscellaneous from './pages/Miscellaneous'
import Playground from './pages/Playground'
import NavBar from './components/NavBar'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-[var(--page-bg)] transition-colors duration-300">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
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

