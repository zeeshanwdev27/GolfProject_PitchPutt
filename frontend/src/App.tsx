import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Routes, Route } from "react-router-dom"
import LenisScroll from "./components/lenis"
import Navbar from "./components/Navbar/Navbar"
import Loader from "./components/Loader"


// Pages
import Home from "./pages/Home/Home"
import CourseDirectory from "./pages/CourseDirectory/CourseDirectory"
import Courses from "./pages/Courses/Courses"
import InsightsBlogs from "./pages/InsightsBlogs/InsightsBlogs"


function App() {

  const [loading, setLoading] = useState(true)

  return (
    <AnimatePresence>

      {loading ? ( <Loader key="loader" onFinish={() => setLoading(false)} /> ) : (

        <motion.div key="app" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <LenisScroll />
          <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/coursedirectory" element={<CourseDirectory />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/blogs" element={<InsightsBlogs />} />
          </Routes>
        </motion.div>
        
      )}

    </AnimatePresence>
  )
}

export default App