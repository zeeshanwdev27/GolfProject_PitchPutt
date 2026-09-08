import * as motion from "motion/react-client";
import { assets } from "../assets/assets";

function Loader() {
  return (
    <div className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-white">

      {/* Logo */}
      <img src={assets.loaderlogo} alt="PitchPutt" className="h-14 mb-8" />

      {/* Rolling ball + trail */}
      <div className="relative w-64 h-6">

        {/* track - emptybar */}
        <div className="absolute top-1/2 left-0 right-0 h-0.75 -translate-y-1/2 bg-neutral-200 rounded-full" />

        {/* animated gradient trail */}
        <motion.div
          className="absolute top-1/2 left-0 h-0.75 -translate-y-1/2 rounded-full"
          style={{ background: "linear-gradient(90deg, #1e2b3c 0%, #96BA34 100%)" }}
          initial={{ width: "0%", opacity: 1 }}
          animate={{ width: ["0%", "100%", "100%"], opacity: [1, 1, 0] }}
          transition={{ duration: 1.6, times: [0, 0.85, 1], repeat: Infinity, ease: "easeInOut" }}
        />

        {/* golf ball */}
        <motion.img
          src={assets.glofball}
          alt=""
          className="absolute -top-2.5 w-7 h-7"
          initial={{ left: "-6%" }}
          animate={{ left: ["-6%", "97%", "97%"], opacity: [1, 1, 0] }}
          transition={{ duration: 1.6, times: [0, 0.85, 1], repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <p className="mt-5 text-xs tracking-widest uppercase text-neutral-400 font-medium">
        Loading
      </p>
      
    </div>
  );
}

export default Loader;