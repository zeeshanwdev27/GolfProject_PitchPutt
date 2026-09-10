import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { PhoneCall, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { createPortal } from "react-dom";
import { assets } from "@/assets/assets";

function MbOverlay({ isOpen, setIsOpen }) {

  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState(null);

  const menuItems = [
    { text: "Home", path: "/" },
    { text: "Courses", path: "/courses" },
    { text: "Course Directory", path: "/coursedirectory" },
    { text: "Insights/Blog", path: "/blogs" },
  ];
  

  useEffect(() => {
    if (!isOpen) return;
    
    // Save current scroll position and scrollbar width before locking
    const scrollY = window.scrollY;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
     document.body.style.left = "0";
     document.body.style.right = "0";
     document.body.style.width = "100%";
     
     // Compensate for the vanished scrollbar so content doesn't shift horizontally
     document.body.style.paddingRight = `${scrollbarWidth}px`;
     
     return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      // Restore exact scroll position
      window.scrollTo(0, scrollY);
    }
  }, [isOpen]);


  const handleClose = () => {
    setIsOpen(false);
    setActiveSubmenu(null);
    setActiveNestedSubmenu(null);
  };
  
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div  className="fixed inset-0 z-1000 lg:hidden" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Panel */}
          <motion.div className="absolute top-0 right-0 w-full h-full bg-[url('/Home/HeroSection/herosection.png')] bg-cover bg-no-repeat text-white flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
          >

            {/* Header */}
            <div className="flex justify-between items-center py-6 px-10 border-b border-white/10 bg-black">
            
              {/* Logo */}
              <Link to={'/'} onClick={()=> scrollTo(0,0)}><img src={assets.logo} alt="logo" className="h-5 md:h-6 lg:h-7" /></Link>

              <button onClick={handleClose} className="p-3 rounded-2xl bg-blue-orange/10 border border-white/80 hover:bg-orange-400/20 transition">
                <X className="w-5 h-5 text-white/80" />
              </button>

            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto px-10 py-4 space-y-2">
              {menuItems.map((item, index) => (
                <div key={index} className="border-b border-white/10">
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() =>
                          setActiveSubmenu(
                            activeSubmenu === item.text ? null : item.text
                          )
                        }
                        className="flex justify-between items-center w-full py-5 text-left text-lg font-semibold hover:text-[#96BA34] transition"
                      >
                        {item.text}
                        <ChevronRight
                          className={`transition-transform duration-300 ${
                            activeSubmenu === item.text
                              ? "rotate-90 text-[#96BA34]"
                              : "text-white/60"
                          }`}
                        />
                      </button>

                      {activeSubmenu === item.text && (
                        <div className="pb-4 space-y-1">
                          {item.submenu.map((sub, i) =>
                            sub.submenu ? (
                              // Sub-item with its own nested submenu
                              <div key={i} className="rounded-xl overflow-hidden">
                                <div className="flex items-center">
                                  {/* Clickable link area */}
                                  <NavLink
                                    to={sub.path}
                                    onClick={handleClose}
                                    className={({ isActive }) =>
                                      `flex-1 py-3 pl-4 text-sm transition ${
                                        isActive
                                          ? "text-[#96BA34] font-semibold"
                                          : "text-white/80 hover:text-orange-400"
                                      }`
                                    }
                                  >
                                    {sub.text}
                                  </NavLink>

                                  {/* Toggle button for nested submenu */}
                                  <button
                                    onClick={() =>
                                      setActiveNestedSubmenu(
                                        activeNestedSubmenu === sub.text
                                          ? null
                                          : sub.text
                                      )
                                    }
                                    className="p-3 hover:text-orange-400 transition"
                                  >
                                    <ChevronRight
                                      className={`w-4 h-4 transition-transform duration-300 ${
                                        activeNestedSubmenu === sub.text
                                          ? "rotate-90 text-orange-400"
                                          : "text-white/60"
                                      }`}
                                    />
                                  </button>
                                </div>

                                {/* Nested submenu items */}
                                {activeNestedSubmenu === sub.text && (
                                  <div className="ml-4 mb-2 space-y-1 border-l-2 border-orange-400/40 pl-3">
                                    {sub.submenu.map((nested, j) => (
                                      <NavLink
                                        key={j}
                                        to={nested.path}
                                        onClick={handleClose}
                                        className={({ isActive }) =>
                                          `block py-2.5 px-3 rounded-lg text-sm transition ${
                                            isActive
                                              ? "bg-orange-400/15 text-orange-400 border border-orange-400/30"
                                              : "text-white/70 hover:bg-white/5 hover:text-orange-400"
                                          }`
                                        }
                                      >
                                        {nested.text}
                                      </NavLink>
                                    ))}
                                  </div>
                                )}
                                
                              </div>
                            ) : (
                              // Regular sub-item (no nested submenu)
                              <NavLink
                                key={i}
                                to={sub.path}
                                onClick={handleClose}
                                className={({ isActive }) =>
                                  `block py-3 px-4 rounded-xl transition ${
                                    isActive
                                      ? "bg-blue-400/15 text-[#96BA34] border border-orange-400/30"
                                      : "text-white/80 hover:bg-white/5 hover:text-orange-400"
                                  }`
                                }
                              >
                                {sub.text}
                              </NavLink>
                            )
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink
                      to={item.path}
                      onClick={handleClose}
                      className={({ isActive }) =>
                        `block py-5 text-lg font-semibold transition ${
                          isActive
                            ? "text-[#96BA34]"
                            : "text-white hover:text-orange-500"
                        }`
                      }
                    >
                      {item.text}
                    </NavLink>
                  )}
                </div>
              ))}
            </div>

            {/* CTA */}
            {/* <div className="p-6 border-t border-white/10">
              <a
                href="tel:+12133573591"
                onClick={handleClose}
                className="flex items-center justify-center gap-3 w-full py-4 border-2 border-orange-400 text-orange-400 rounded-xl font-semibold hover:bg-blue-400/10 transition"
              >
                <PhoneCall className="w-5 h-5" />
                Get Free Consultation
              </a>
            </div> */}


          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

export default MbOverlay;