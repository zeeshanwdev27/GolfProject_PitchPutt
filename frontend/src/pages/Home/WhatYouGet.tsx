import { assets } from "@/assets/assets"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"


function WhatYouGet() {

    const [activeTitle, setActiveTitle] = useState('PitchPutt PLAY')

    const titleLists = [
        {title: 'PitchPutt PLAY', icon: `${assets.wyg_icon1}`}, 
        {title: 'PitchPutt IMPROVE', icon: `${assets.wyg_icon2}`}, 
        {title: 'PitchPutt COMPETE', icon: `${assets.wyg_icon3}`}, 
        {title: 'PitchPutt GEAR-UP', icon: `${assets.wyg_icon4}`}, 
        {title: 'PitchPutt UNITE', icon: `${assets.wyg_icon5}`},
    ]

    const contentLists = [
        {
            url: `${assets.wyg_img1}`,
            title: "PitchPutt PLAY",
            content:
            "Discover exciting PitchPutt courses across North America and enjoy a fun, accessible way to play the game. From casual rounds with friends to exploring new courses, find your next place to play and make every round an experience.",
        },
        {
            url: `${assets.wyg_img2}`,
            title: "PitchPutt IMPROVE",
            content:
            "Take your game to the next level by developing your skills and building confidence on the course. Practice your short game, improve your consistency, and challenge yourself to become a smarter and more capable PitchPutt player.",
        },
        {
            url: `${assets.wyg_img3}`,
            title: "PitchPutt COMPETE",
            content:
            "Put your skills to the test and experience the excitement of competitive PitchPutt. Join USAPitchPutt tournaments, compete against players from across the community, and see how far your game can take you.",
        },
        {
            url: `${assets.wyg_img4}`,
            title: "PitchPutt GEAR-UP",
            content:
            "Get ready for your next round with the gear and essentials designed to keep you prepared on and off the course. Find the equipment you need to feel comfortable, confident, and ready to make the most of every PitchPutt experience.",
        },
        {
            url: `${assets.wyg_img5}`,
            title: "PitchPutt UNITE",
            content:
            "Become part of a growing community that is passionate about PitchPutt and the future of the game. Connect with fellow players, share experiences, discover new opportunities, and unite with others to help grow the game together.",
        },
    ];

    const filteredContentLists = contentLists.filter((data)=> data.title === activeTitle)


  return (
    <div className="relative h-full overflow-hidden">
        
        <img src={assets.bgball} alt="" className="h-25 absolute right-0 top-5 z-50" />
        <img src={assets.golfstick} alt="" className="hidden md:block h-60 absolute -left-20 top-0" />
        <img src={assets.pinball} alt="" className="h-40 absolute bottom-15 right-0 " />


        <div className="mx-4 sm:mx-[5%] lg:mx-[10%] py-20 flex flex-col gap-10 ">
            
            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold"
            initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            >
                What You Get
            </motion.h1>


            <div className="flex gap-20">

                {/* Left Side */}
                <div className="flex flex-col gap-5 w-full max-w-lg">
                    {
                    titleLists.map((data, index)=>(
                    <div className={`rounded-lg p-6 flex justify-between items-center hover:scale-102 ${activeTitle === data.title ? 'bg-[#274E4B] text-white' : 'bg-[#B5DF46]' }`} onClick={()=> setActiveTitle(data.title)}>
                        <div className="flex items-center gap-3">
                            <img src={data.icon} alt="" className={`h-7 ${activeTitle === data.title ? 'invert brightness-0' : ''}`} />
                            <h1 className="text-xl font-semibold">{data.title}</h1>
                        </div>
                        <p className="text-2xl font-semibold">0{index + 1}</p>
                    </div>
                    ))
                    }
                </div>


                {/* RIght Side */}
                <div className="w-full max-w-2xl relative min-h-112.5">
                    <AnimatePresence mode="wait">
                        {
                        filteredContentLists.map((data) => (
                        <motion.div 
                            className="flex flex-col gap-5 w-full absolute top-0 left-0" 
                            key={data.title} // Crucial: must change based on active data to trigger refresh
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                        >

                            {/* Image Wrapper Container */}
                            <div className="relative rounded-2xl h-70 w-full overflow-hidden">
                                <motion.img 
                                    src={data.url} 
                                    alt={data.title} 
                                    className="rounded-2xl absolute inset-0 w-full h-full object-cover" 
                                    initial={{ scale: 1.15 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                />
                                <div className="absolute inset-0 bg-black/5"></div>
                                <h1 className="absolute bottom-0 left-0 text-white p-8 text-4xl font-bold">{data.title}</h1>
                            </div>

                            <p className="text-lg lg:text-xl max-w-2xl leading-8">{data.content}</p>

                        </motion.div>
                        ))
                        }
                    </AnimatePresence>
                </div>

        
            </div>

            

        </div>
      
    </div>
  )
}

export default WhatYouGet
