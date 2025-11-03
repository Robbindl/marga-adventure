import { motion } from "framer-motion";
import memory from "../assets/memory.jpg";

export default function MemoryPage({ onNext }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-screen h-screen text-white overflow-hidden"
      style={{
        backgroundImage: `url(${memory})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.h1
        className="text-6xl font-extrabold drop-shadow-2xl mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Echoes of Memory 💭
      </motion.h1>

      <motion.p
        className="text-2xl text-center max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1.2 }}
      >
        Memories shimmer through time, reminding her of love once found.
      </motion.p>

      <motion.button
        onClick={onNext}
        className="flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-pink-400 via-rose-500 to-red-500 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        💞 Unlock the Memories
      </motion.button>
    </div>
  );
}
