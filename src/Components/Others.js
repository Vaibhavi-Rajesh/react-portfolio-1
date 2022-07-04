import React from 'react';


import Image from '../images/background.jpg';
import { motion } from 'framer-motion';
import { animationTwo, } from '../animations';
import Navbar from './Navbar';

const Others = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationTwo}>
     
      <section id='Others'>

      </section>
    </motion.div>
  );
};

export default Others;