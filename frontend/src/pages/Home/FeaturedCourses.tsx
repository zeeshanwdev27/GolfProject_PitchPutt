import { assets } from "@/assets/assets";
import { AnimatedfeaturedCourses } from "@/components/ui/animated-testimonials";
import * as motion from 'motion/react-client'


function FeaturedCourses() {

    const featuredCourses = [
    {
      description:
        "An incredible layout that challenges your short game while keeping it fun for the whole family. The scenic backdrops and immaculate greens made our weekend unforgettable.",
      name: "Bigfoot PitchPutt",
      tagline: "Family Outing & Golf Enthusiast",
      src: `${assets.featured_img1}`,
    },
    {
      description:
        "The perfect blend of natural beauty and pristine course design. Every hole offers a unique test of skill, wrapped in a beautifully maintained landscape.",
      name: "Vickery Creek",
      tagline: "Amateur Golfer & Nature Lover",
      src: `${assets.featured_img2}`,
    },
    {
      description:
        "Boasting spectacular coastal views and a masterfully crafted short course. It is an absolute must-visit destination for anyone looking to sharpen their wedge play.",
      name: "Doolin Pitch & Putt",
      tagline: "Weekend Traveler & Local Member",
      src: `${assets.featured_img3}`,
    },
    {
      description:
        "Top-tier greens, friendly staff, and a welcoming atmosphere for players of all skill levels. It is easily the best community golf experience in the area.",
      name: "Blaby Pitch & Putt",
      tagline: "Casual Player & Club Regular",
      src: `${assets.featured_img4}`,
    },
  ];


  return (
    <div className="relative h-full py-10 mx-4 sm:mx-[5%] lg:mx-[10%] flex flex-col gap-5">
        
        <motion.h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mx-auto"
        initial={{ y: 60, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1, delay: 0.1 }}
        >
            Featured Courses
        </motion.h1>


        <AnimatedfeaturedCourses featuredCourses={featuredCourses} />
      
    </div>
  )
}

export default FeaturedCourses
