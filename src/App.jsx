import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Layout/Header/Header'
import Home from './Components/Home/Home'
import CoursePlayer from './Components/Courses/CoursePlayer/CoursePlayer'
import Signup from './Components/Authentication/Signup/Signup'
import LoginPage from './Components/Authentication/Login/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <Router>
      <Header />
      <main>        
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/course-player' element={<CoursePlayer></CoursePlayer>} />
          <Route path='/signup' element={<Signup></Signup>}/>
          <Route path='/login' element={<LoginPage></LoginPage>}/>
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
