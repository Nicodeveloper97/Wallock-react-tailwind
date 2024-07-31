
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const TypingTitle = () => {
  return (
    <motion.h1
    className="text-3xl md:text-6xl font-quicksand text-white font-extralight overflow-hidden border-white whitespace-nowrap mb-4"
    initial={{ width: 0, marginLeft: '50%' }}
    animate={{ width: '100%', marginLeft: '0%' }}
    transition={{ duration: 4, ease: 'linear' }}
    style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      Software Boutique.
    </motion.h1>
  );
};

export default TypingTitle;