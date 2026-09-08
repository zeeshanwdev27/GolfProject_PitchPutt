import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import LenisScroll from "./components/lenis"
import Navbar from "./components/Navbar/Navbar"
import CourseDirectory from "./pages/CourseDirectory/CourseDirectory"
import Courses from "./pages/Courses/Courses"
import InsightsBlogs from "./pages/InsightsBlogs/InsightsBlogs"
import { useEffect, useState } from "react"
import Loader from "./components/Loader"


function App() {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2000) // swap for real init logic
    return () => clearTimeout(t)
  }, [])

  if (loading) return <Loader />

  return (
    <>
    <LenisScroll/>
    <Navbar/>

    <Routes>
      <Route index element={ <Home/> }  />
      <Route path="/coursedirectory" element={ <CourseDirectory/> }  />
      <Route path="/courses" element={ <Courses/> }  />
      <Route path="/blogs" element={ <InsightsBlogs/> }  />
    </Routes>

    </>
  )
}

export default App
