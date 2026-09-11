import { useRef } from "react"
import { assets } from "@/assets/assets"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

function Testimonials() {

    const plugin = useRef( Autoplay({ delay: 4000, stopOnInteraction: false }) )

    const testimonialsData = [
              {
        src: `${assets.client2}`,
        quote:
          "I love how easy it is to jump in and play. Whether you're practicing your short game or playing with friends, PitchPutt is always a great time.",
        clientName: "Sophie Chen",
        occupation: "Architect",
      },
      {
        src: `${assets.client3}`,
        quote:
          "PitchPutt has completely changed the way I practice. It’s competitive, social, and makes improving your short game genuinely enjoyable.",
        clientName: "Daniel Brooks",
        occupation: "Entrepreneur",
      },
      {
        src: `${assets.client1}`,
        quote:
          "PitchPutt makes golf feel more relaxed and approachable. It’s the perfect way to enjoy a quick round without spending the whole day on the course.",
        clientName: "Maya Thompson",
        occupation: "Real Estate Agent",
      },

      {
        src: `${assets.client4}`,
        quote:
          "The courses are fun, challenging, and perfect for players of different skill levels. It’s become one of my favorite ways to spend time with friends.",
        clientName: "Jordan Williams",
        occupation: "Marketing Executive",
      },
      {
        src: `${assets.client5}`,
        quote:
          "What I enjoy most is the atmosphere. PitchPutt brings people together and makes getting better at golf feel effortless.",
        clientName: "Ethan Parker",
        occupation: "Financial Advisor",
      },
      {
        src: `${assets.client6}`,
        quote:
          "It’s the perfect mix of competition and fun. PitchPutt gives you a reason to grab your clubs, meet your friends, and play another round.",
        clientName: "Ava Martinez",
        occupation: "Lawyer",
      },
    ];

  return (
    <div className="relative h-full overflow-hidden">

        <img src={assets.testimonials_bg} alt="testimonials_bg" className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute inset-0 bg-black/40" />


        <div className="h-full py-10 relative z-10 mx-4 sm:mx-[5%] lg:mx-[10%] text-white">


            <Carousel opts={{ loop: true }} plugins={[plugin.current]} onMouseEnter={plugin.current.stop} onMouseLeave={plugin.current.reset} className="h-full flex items-center justify-center">
                <CarouselContent>

                    {
                        testimonialsData.map((data)=>(
                        <CarouselItem key={data.clientName}>
                            <div className="flex flex-col gap-2 max-w-5xl mx-auto">
                                <img src={assets.quote} alt="" className="h-15 w-25" />
                                <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium leading-10 lg:leading-14 text-center ">{data.quote}</h1>
                                <div className="flex gap-5 items-center justify-center mt-5">
                                    <img src={data.src} alt="" className="w-17 h-17 rounded-full object-cover" />
                                    <div className="flex flex-col">
                                        <h1 className="text-xl md:text-2xl font-medium">{data.clientName}</h1>
                                        <p className="text-md md:text-lg">{data.occupation}</p>
                                    </div>
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

export default Testimonials
