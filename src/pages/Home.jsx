import { motion } from 'framer-motion';
import { PlayIcon } from '@heroicons/react/24/solid';
import galaxy from "../assets/galaxy.jpg";

export default function Home({ onStart }) {
  return (
    <div
      className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden text-white bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom right, rgba(128,0,128,0.6), rgba(255,105,180,0.6)), url(${galaxy})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100vh',
      }}
    >
      <motion.h1
        className="text-6xl md:text-8xl font-extrabold drop-shadow-2xl mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        Marga’s Grand Adventure 🌸
      </motion.h1>

      <motion.p
        className="text-lg md:text-2xl text-white/90 text-center mb-10 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      >
        A journey through the stars — of love, mystery, and unforgettable magic ✨
      </motion.p>

      <motion.button
        onClick={onStart}
        className="flex items-center gap-2 px-8 py-4 bg-pink-500 hover:bg-pink-600 rounded-full text-xl font-bold shadow-lg hover:scale-110 transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <PlayIcon className="h-6 w-6" /> Start Adventure
      </motion.button>
    </div>
  );
}
