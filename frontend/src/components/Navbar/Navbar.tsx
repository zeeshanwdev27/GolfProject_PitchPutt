import { Link, NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import { PrimaryButton } from "../Buttons";
import * as motion from 'motion/react-client'

function Navbar() {

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Courses', href: '/courses' },
        { name: 'Course Directory', href: '/coursedirectory' },
        { name: 'Insights/Blog', href: '/blogs' },
    ];

  return (
    <motion.nav className="fixed top-5 left-0 right-0 z-999" initial={{y: -100, opacity: 0}} animate={{y: 0, opacity: 1}} viewport={{once: true}} transition={{type: 'spring', stiffness: 250, damping: 70, mass: 1}} >
        
        <div className="max-w-6xl mx-auto flex items-center justify-between bg-white/20 rounded-4xl p-3 px-5">

           {/* Logo */}
           <Link to={'/'} onClick={()=> scrollTo(0,0)}>
              <img src={assets.logo} alt="logo" className="h-7" />
           </Link>

           {/* Links */}
           <div className="hidden md:flex items-center gap-8 text-md">
              {navLinks.map((link)=>(
                <NavLink onClick={()=> scrollTo(0,0)} to={link.href} key={link.name} className={({isActive})=> `transition ${ isActive ? 'text-[#96BA34]' : 'navbar-text'}`}>
                {link.name}
                </NavLink>
              ))}
           </div>

           {/* Buttons */}
           <div className="hidden md:flex items-center gap-4">
            <Link to={'/'} onClick={()=> scrollTo(0,0)} className="font-medium text-white">LOG IN</Link>
            <PrimaryButton>Become A Member</PrimaryButton>
           </div>

        </div>
      
    </motion.nav>
  )
}

export default Navbar
