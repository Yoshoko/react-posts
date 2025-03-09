import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import PostsList from './components/PostsList.jsx'
import Post from './components/Post.jsx'

function App() {
  return  (
    <Router>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="/post/:id" element={<Post />} />
      </Routes>
    </Router>
  )
}

export default App
