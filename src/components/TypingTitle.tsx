
import { motion } from 'framer-motion';
import 'tailwindcss/tailwind.css';

const TypingTitle = () => {
  return (
    <motion.h1
    className="text-3xl md:text-6xl font-quicksand text-[#1C222B] font-semibold sm:font-extralight overflow-hidden border-white whitespace-nowrap mb-4 text-left lg:text-center"
    initial={{ width: 0, marginLeft: '0%' }} 
    animate={{ width: '100%' }} 
    transition={{ duration: 4, ease: 'linear' }}
    style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
>
      Software Boutique.
    </motion.h1>
  );
};

export default TypingTitle;