import { motion } from "framer-motion";
import * as React from 'react';

const Title = () => {
  return (
    <div className="h-screen pt-96 " id="section_1">
      <motion.h1
        className="flex justify-center text-8xl text-amber-200 mb-3 font-inter font-light"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Ronny Yeung
      </motion.h1>
      <motion.h3
        className="flex justify-center text-3xl text-white font-bold"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        Software Engineer | Bartender | Creative
      </motion.h3>
      <motion.h3
        className="flex justify-center text-white"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.3 }}
      >
        The World's Your Oyster, And It's Buck a' Shuck
      </motion.h3>
    </div>
  );
};

export default Title;
