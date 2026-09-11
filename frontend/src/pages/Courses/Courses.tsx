import { assets } from "@/assets/assets"
import { motion } from "motion/react"


function Courses() {
  return (
  <section className="relative min-h-screen overflow-hidden">
    
          {/* Bg_image */}
          <img src={assets.hero} alt="hero_section" className="absolute inset-0 w-full h-full object-cover" />


          <div className="h-screen relative z-10 mx-4 sm:mx-[5%] lg:mx-[10%] pt-32 md:pt-0 pb-12 text-white flex justify-center items-center">
            
            {/* Heading */}
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-medium max-w-xl leading-15 lg:leading-20"  
            initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            >
              Coming Soon
            </motion.h1>

          </div>
      
    </section>
  )
}

export default Courses
