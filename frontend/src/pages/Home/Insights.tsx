import { motion } from 'motion/react'
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { assets } from '@/assets/assets'
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from 'react';


function Insights() {

    const [api, setApi] = useState<CarouselApi>()

    const insightsContent = [
    {
        image: assets.insights_img1,
        title: 'Mastering Your Short Game',
        author: 'Alex Morgan'
    },
    {
        image: assets.insights_img2,
        title: 'Build Confidence With Every Swing',
        author: 'James Carter'
    },
    {
        image: assets.insights_img3,
        title: 'Play Smarter, Score Better',
        author: 'Daniel Brooks'
    },
    {
        image: assets.insights_img4,
        title: 'Find Your Rhythm on the Course',
        author: 'Ryan Mitchell'
    },
    {
        image: assets.insights_img5,
        title: 'Sharpen Your Pitch & Putt Skills',
        author: 'Chris Anderson'
    },
    {
        image: assets.insights_img6,
        title: 'Golf Is Better When You Play Together',
        author: 'Michael Turner'
    },
    ];


  return (
  <div className="relative h-full py-10 sm:py-15 mx-4 sm:mx-[5%] lg:mx-[10%] flex flex-col gap-10">

    {/* Heading */}
    <div className='flex flex-col mx-auto gap-5 text-center w-full max-w-3xl'>
        <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mx-auto"
        initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
        >
            Insights
        </motion.h1>
        
        <p className='text-md md:text-lg lg:text-xl'>Golf courses and recreational spaces are ideal for a variety of settings, from community parks to private clubs. These versatile facilities can transform underutilized spaces into vibrant hubs for social interaction and wellness.</p>
    </div>


    {/* Body */}
    <div className='flex flex-col gap-10'>

        {/* Buttons */}
        <div className='flex justify-end gap-4'>
            
            <button onClick={() => api?.scrollPrev()} className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-black dark:bg-neutral-800">
              <IconArrowLeft className="h-7 w-7 text-white transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
            </button>
            
            <button onClick={() => api?.scrollNext()} className="group/button flex h-12 w-12 items-center justify-center rounded-full bg-[#B5DF46] dark:bg-neutral-800">
              <IconArrowRight className="h-7 w-7 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
            </button>

        </div>


        {/* Crousel */}
        <Carousel setApi={setApi}>
            <CarouselContent>
                {
                    insightsContent.map((data)=>(
                    <CarouselItem  key={data.title} className="md:basis-1/2 lg:basis-1/3">
                        <div className='flex flex-col gap-4'>
                            <img src={data.image} alt="" className='h-80 w-full object-cover' />
                            <div className='px-3 flex flex-col gap-2'>
                                <h1 className='text-lg md:text-xl lg:text-2xl font-medium leading-8'>{data.title}</h1>
                                <p className='text-sm text-stone-600'>by {data.author}</p>
                            </div>
                        </div>
                    </CarouselItem>
                    ))
                }
            </CarouselContent>
        </Carousel>
        
    </div>
    

    
            
          
    </div>
  )
}

export default Insights
