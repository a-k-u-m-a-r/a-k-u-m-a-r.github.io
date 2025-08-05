import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Projects from './components/Projects'
import Blogs from './components/Blogs'
import ProjectDetail from './components/ProjectDetail'
import BlogDetail from './components/BlogDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  )
}

export default App
