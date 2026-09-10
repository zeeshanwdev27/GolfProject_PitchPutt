import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import { PrimaryButton } from "../Buttons";
import * as motion from 'motion/react-client'
import { useEffect, useState } from "react";
import MbOverlay from "./MBOverlay";

function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [maxW, setMaxW] = useState(1152);

  const navLinks = [
      { name: 'Home', href: '/' },
      { name: 'Courses', href: '/courses' },
      { name: 'Course Directory', href: '/coursedirectory' },
      { name: 'Insights/Blog', href: '/blogs' },
  ];

  const toggleMenu = () => setIsMenuOpen((p) => !p);


  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  // Smooth Navbar Transition
  useEffect(() => {

    const getTarget = () => {
      if (window.innerWidth < 640) return isScrolled ? 384 : 448;   // sm values
      if (window.innerWidth < 1024) return isScrolled ? 576 : 672;  // lg values
      return isScrolled ? 1024 : 1152;
      };
      setMaxW(getTarget());
      
      const onResize = () => setMaxW(getTarget());
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);

    }, [isScrolled]);


  return (
    <motion.nav className="fixed top-5 max-sm:px-5 px-10 left-0 right-0 z-999" 
    initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} viewport={{once: true}} transition={{type: 'spring', stiffness: 250, damping: 70, mass: 1}} 
    >
      
      <motion.div className={`mx-auto flex items-center justify-between rounded-4xl p-3 px-5`}
        animate={{ 
          maxWidth: maxW,
          backgroundColor: isScrolled ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,0.2)',
          boxShadow: isScrolled ? '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.4)' : '0 0 #0000',
         }}
         transition={{
          type: 'spring', stiffness: 200, damping: 30,mass: 0.8
         }}
        >
          

           {/* Logo */}
           <Link to={'/'} onClick={()=> scrollTo(0,0)}>
              <img src={assets.logo} alt="logo" className="h-5 md:h-6 lg:h-7" />
           </Link>


           {/* Hamburger */}
           <button className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.25 z-50" onClick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen} aria-controls="mobile-menu">
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
            <span className="w-6 h-0.5 bg-white rounded-full" />
          </button>


           {/* Links */}
           <div className="hidden lg:flex items-center gap-8 text-md">
              {navLinks.map((link)=>(
                <NavLink onClick={()=> scrollTo(0,0)} to={link.href} key={link.name} className={({isActive})=> `transition ${ isActive ? 'text-[#96BA34]' : 'navbar-text'}`}>
                {link.name}
                </NavLink>
              ))}
           </div>


           {/* Buttons */}
           <div className="hidden lg:flex items-center gap-4">
            <Link to={'/'} onClick={()=> scrollTo(0,0)} className="font-medium text-white">LOG IN</Link>
            <PrimaryButton>Become A Member</PrimaryButton>
           </div>


           {/* Mobile Overlay */}
           {isMenuOpen && <MbOverlay isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />}

      </motion.div>
      
    </motion.nav>
  )
}

export default Navbar
