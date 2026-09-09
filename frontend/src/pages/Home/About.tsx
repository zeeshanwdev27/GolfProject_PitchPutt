import { assets } from "@/assets/assets"
import { ArrowButton, PrimaryButton } from "@/components/Buttons"
import * as motion from 'motion/react-client'
import { useState } from "react"


function About() {

    const [active, setActive] = useState('heading1')

  return (
    <div className="relative h-full overflow-hidden ">


        <img src={assets.golfstick} alt="" className="hidden md:block h-60 absolute -right-12 -top-12" />
        <img src={assets.bgball} alt="" className="h-25 absolute -left-5 -bottom-4" />
        <img src={assets.pinball} alt="" className="h-40 absolute bottom-15 right-0" />


        <div className="mx-4 sm:mx-[5%] lg:mx-[10%] py-20 flex flex-col lg:flex-row items-center gap-20">

            {/* Image */}
            <div className="relative">

                <motion.div className="relative h-130 overflow-hidden rounded-2xl rounded-br-[5.5rem]" 
                 whileHover="hover" animate="rest" initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                >
                    <img src={assets.golfshot} alt="" className="h-130 w-full object-cover rounded-2xl rounded-br-[5.5rem] border border-[#274E4B]" />
                    
                    <motion.div
                    className="absolute top-0 left-0 h-[200%] w-25 -translate-y-1/4 -translate-x-1/2 rotate-45 bg-white/30 backdrop-blur-xs border-l border-white/30 pointer-events-none"
                    variants={{ rest: { x: "-250%" }, hover: { x: "600%" } }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    />

                </motion.div>
                
                <div className="absolute bg-[#95B933]/60 h-45 w-45 rounded-full bottom-0 right-0 flex items-center justify-center">
                    <motion.img src={assets.glofball} alt="" animate={{ rotate: 360, scale: 1 }} transition={{ layout: { duration: 3, type: "spring", bounce: 0.20 }, rotate: { duration: 2, repeat: Infinity, ease: "linear", delay: 0.7 } }} className="h-25"/>
                </div>

            </div>

            {/* Content */}
            <div className="flex flex-col gap-5 w-full max-w-2xl">

                <div className="flex flex-col gap-2">
                    <div className="flex gap-10 md:gap-20">
                        
                        <div onClick={()=> setActive('heading1')} className="relative cursor-pointer">
                            <motion.h1 className={`text-2xl md:text-3xl text-[#274E4B] ${active === 'heading1' ? 'font-semibold' : ''}`}
                            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                Who We Are
                            </motion.h1>
                            {active === 'heading1' && (<motion.div layoutId="activeUnderline" className="absolute -bottom-2.75 left-0 right-0 h-0.75 bg-[#274E4B]" transition={{type: 'spring', stiffness: 400, damping: 30}}/>)}
                        </div>

                         <div onClick={()=> setActive('heading2')} className="relative cursor-pointer">
                            <motion.h1 className={`text-2xl md:text-3xl text-[#274E4B] ${active === 'heading2' ? 'font-semibold ' : ''}`}
                            initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
                            >
                                Who Is PitchPutt?
                            </motion.h1>
                            {active === 'heading2' && (<motion.div layoutId="activeUnderline" className="absolute -bottom-2.75 left-0 right-0 h-0.75 bg-[#274E4B]" transition={{type: 'spring', stiffness: 400, damping: 30}}/>)}
                        </div>

                    </div>
                    <div className="w-full h-0.75 bg-[#A8D431]"></div>
                </div>

                <div className="p-2 flex flex-col gap-10">

                    <motion.p className="text-lg lg:text-xl max-w-2xl leading-8 lg:h-50"
                    initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.2 }}
                    >
                        {
                            active === 'heading1' 
                            ? "PitchPutt is more than a game—it’s a community built around fun, competition, and connection. We bring players together through exciting PitchPutt experiences, thoughtfully designed courses, and a shared passion for growing the game." 
                            : "PitchPutt is the heartbeat of a growing short-game golf subculture, uniting passionate players through a shared love for the wedge and the putter. We are a vibrant community and a national network anchored by platforms like USAPitchPutt."
                        }
                    </motion.p>
                    
                    <motion.div className="" initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}>
                        <PrimaryButton className="flex items-center gap-10 py-3 lg:text-lg! w-fit">
                            Read More
                            <ArrowButton/>
                        </PrimaryButton>
                    </motion.div>
                </div>

            </div>
            
        </div>



      
    </div>
  )
}

export default About
