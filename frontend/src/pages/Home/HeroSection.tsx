import { ArrowDown } from "lucide-react"
import { assets } from "../../assets/assets"
import { ArrowButton, PrimaryButton } from "../../components/Buttons"
import * as motion from 'motion/react-client'
import Counter from "../../components/Counter"
import { FlipWords } from "@/components/ui/flip-words";

function HeroSection() {

  const words = ["Adventure", "Journey", "Challenge", "Experience"];
  
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Bg_image */}
      <img src={assets.hero} alt="hero_section" className="absolute inset-0 w-full h-full object-cover" />

      {/* Bg_Overlay */}
      <div className="absolute inset-0 bg-black/5" />
      
      {/* Hero Content */}
      <div className="relative z-10 mx-4 sm:mx-[5%] lg:mx-[10%] top-40 md:top-50 lg:top-60">

        <div className="flex flex-col gap-7 text-white w-full">

          <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-medium max-w-xl leading-15 lg:leading-20"  initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}>
            Your Next Golf{" "} 
            <br /> 
            <span className="relative inline-block">
              <FlipWords words={words} className="text-[#96BA34] whitespace-nowrap" />
            </span>{" "}
            <br /> 
            Starts Now
          </motion.h1>

          <motion.p className="text-xl lg:text-2xl max-w-2xl leading-8" initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}>
            Unlock Crusade PitchPutt courses like Bigfoot and Vickery Creek. Play pitch & putt courses near you. Battle in USAPitchPutt tournaments. Unite to Grow the Game.
          </motion.p>


          <motion.div className="" initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}>
          <PrimaryButton className="flex items-center gap-3 py-3 lg:text-xl! w-fit">
            Join Now-Free Par Membership
            <ArrowButton/>
          </PrimaryButton>
          </motion.div>


          <div className="grid lg:grid-cols-3 max-lg:gap-10 w-full mt-10">
            
            <div className="hidden lg:flex"></div>

            <motion.div className="relative flex justify-center items-center text-black lg:order-2 order-2" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}  viewport={{ once: true }}  transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.5 }}>
              <motion.img layoutId="hero-ball" animate={{rotate:360, scale: 1}} transition={{ layout: { duration: 3, type: "spring", bounce: 0.20 }, rotate:{duration: 2, repeat: Infinity, ease: "linear", delay: 0.7}} } src={assets.glofball} className="h-40"></motion.img>
              <motion.div animate={{ y: [0, -8, 0] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut",}} className="absolute w-25 h-25 border-3 border-black hover:bg-[#A4AA6A] rounded-full flex flex-col items-center justify-center cursor-pointer">
                <ArrowDown className="w-12 h-12"/>
                Scroll
              </motion.div>
            </motion.div>

            <div className="flex flex-col md:flex-row gap-8 items-center lg:justify-end lg:order-3 order-1">
              <div className="flex flex-col gap-3">
                 <Counter value={500} suffix="K+" />
                 <motion.p className="text-xl" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}>Satisfied Customers</motion.p>
              </div>
              <div className="flex flex-col gap-3">
                 <Counter value={500} suffix="+" />
                 <motion.p className="text-xl" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}>Courses Worldwide</motion.p>
              </div>
            </div>

          </div>

        </div>
        
      </div>

    </section>
  )
}

export default HeroSection