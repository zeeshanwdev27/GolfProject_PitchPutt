import * as motion from "motion/react-client"
import { assets } from "../assets/assets"

function Loader({ onFinish }: { onFinish: () => void }) {

  return (
    <motion.div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white" exit={{ opacity: 0 }} transition={{ duration: 0.8 }} >

      {/* Logo */}
      <img src={assets.loaderlogo} alt="PitchPutt" className="h-14 mb-8" />


      <div className="relative w-64 h-6">

        {/* empty-bar */}
        <div className="absolute top-1/2 left-0 right-0 h-0.75 -translate-y-1/2 bg-neutral-200 rounded-full" />

        {/* Loading-bar */}
        <motion.div className="absolute top-1/2 left-0 h-0.75 -translate-y-1/2 rounded-full" style={{ background: "linear-gradient(90deg, #1e2b3c 0%, #96BA34 100%)" }}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
          onAnimationComplete={onFinish}
        />

        {/* golf-Ball */}
        <motion.img layoutId="hero-ball" src={assets.glofball} alt="" className="absolute -top-2.5 w-7 h-7"
          initial={{ left: "-6%" }}
          animate={{ left: "97%" }}
          transition={{ duration: 1.6, ease: "easeInOut" }}
        />
      </div>

      <p className="mt-5 text-xs tracking-widest uppercase text-neutral-400 font-medium">
        Loading
      </p>
      
    </motion.div>
  )
}

export default Loader