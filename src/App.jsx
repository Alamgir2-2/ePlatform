import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Layout/Header/Header'
import Home from './Components/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
      <Header />
      <main>
        
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          Add other routes as needed
        </Routes> */}
      </main>
      {/* <Footer /> */}
    </Router>
    
  )
}

export default App
