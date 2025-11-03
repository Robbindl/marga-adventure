import { motion } from "framer-motion";
import dreamscape from "../assets/dreamscape.jpg";

export default function DreamscapeRealm({ onNext }) {
  return (
    <div
  className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-white"
  style={{
    backgroundImage: `url(${dreamscape})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
      <motion.h1
        className="text-6xl font-extrabold drop-shadow-2xl mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Dreamscape Realm 🌌
      </motion.h1>

      <motion.p
        className="text-2xl text-center max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        Dreams blur with reality as new worlds bloom before her eyes.
      </motion.p>

      <motion.button
        onClick={onNext}
        className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🌙 Enter the Dream
      </motion.button>
    </div>
  );
}
