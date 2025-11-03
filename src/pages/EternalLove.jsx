import { motion } from "framer-motion";
import eternity from "../assets/eternity.jpg";

export default function EternalLove({ onRestart }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-screen h-screen text-white overflow-hidden"
      style={{
        backgroundImage: `url(${eternity})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h1
        className="text-6xl font-extrabold drop-shadow-2xl mb-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Eternal Love 💞
      </motion.h1>

      <motion.p
        className="text-2xl text-center max-w-3xl mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 2 }}
      >
        As the cosmos whispers its final lullaby, love endures beyond the stars — infinite, radiant, and forever bound in time. ✨
      </motion.p>

      <motion.button
        onClick={onRestart}
        className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-600 via-rose-600 to-fuchsia-700 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🔁 Back to Start
      </motion.button>
    </div>
  );
}
