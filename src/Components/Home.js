import React from 'react';

import Hero from './Hero';
import Image from '../images/background.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../animations';

const Home = () => {
  return (
    <motion.div
      initial='out'
      animate='in'
      exit='out'
      variants={animationOne}
      transition={transition}
    >
      
      
      <Hero image={Image} title='Experience Nature' desc='Once in a lifetime' />
    </motion.div>
  );
};

export default Home;