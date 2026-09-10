import { assets, ThreePillarsCards } from '@/assets/assets'
import { ArrowButton, PrimaryButton } from '@/components/Buttons'
import * as motion from 'motion/react-client'

function ThreePillars() {
  return (
    <div className="h-full overflow-hidden py-10 bg-[#F8F8F8]">

        <div className="flex flex-col gap-10 mx-4 sm:mx-[5%] lg:mx-[10%]">

            <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mx-auto"
            initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
            >
                Our Three Pillars
            </motion.h1>


            {/* Cards */}
            <div className='flex max-lg:flex-col gap-20 lg:gap-5 mx-auto mt-10'>

                {
                    ThreePillarsCards.map((data,index)=>(
                    <div key={index} className={`relative h-100 w-100 ${ index % 2 ? 'bg-[#B5DF46] text-[#274E4B]' : 'bg-[#274E4B] text-white'} p-5 px-8 shadow-xl hover:scale-102`}>

                    <div className='absolute h-35 w-35 rounded-full bg-[#F8F8F8] -top-15 left-1/2 -translate-x-1/2 flex justify-center items-center'>
                        <div className={`h-[80%] w-[80%] ${ index % 2 ? 'bg-[#274E4B] text-[#B5DF46]' : 'bg-[#B5DF46] text-[#274E4B]'} rounded-full flex justify-center items-center`}>
                            <h1 className='text-6xl font-bold'>{index+1}</h1>
                        </div>
                    </div>

                    <div className='flex flex-col gap-10 items-center justify-center h-full'>

                        <div className='relative mt-10'>
                            <h1 className='text-center text-2xl font-semibold'>{data.title}</h1>
                            <div className="absolute -bottom-2.75 left-1/2 -translate-x-1/2  h-[2.5px] w-30 bg-white"></div>
                        </div>

                        <ul className=''>
                            {
                            data.description.map((des)=> (
                            <li className='text-lg font-light flex items-center gap-2'>
                                <img src={assets.bgball} alt="" className='w-3 h-3 self-start mt-2' />
                                <span>{des}</span>
                            </li>
                                ))
                            }
                        </ul>

                    </div>
    
                </div>

                    ))
                }

            </div>


            {/* CTA */}
            <motion.div className="mx-auto" initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.3 }}>
                <PrimaryButton className="flex items-center gap-10 py-3 lg:text-lg! w-fit">
                    Join Now
                    <ArrowButton/>
                </PrimaryButton>
            </motion.div>

        </div>
      
    </div>
  )
}

export default ThreePillars
