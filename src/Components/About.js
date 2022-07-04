import React from 'react';

import Image from '../images/me.jpg';
import { motion } from 'framer-motion';
import { animationOne } from '../animations';

import './About.css'
import { FaAward } from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc'



const About = () => {
 
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
      
      <div className='about'>
      <section id='About'>
        <div className='Headers'>
          <h3>Get to know</h3>
          <h1>About Me</h1>
          </div>

      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src={Image} alt='About Image' />
          </div>
        </div>

        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <div className='icon'>
              <FaAward className='about_icon' />
              </div>
              <h5>Current year</h5>
              <div className='thing'>
              <small>JC1, finishing the IB programme in 2023 at ACSI</small>
              </div>
            </article>
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Hobbies</h5>
              <div className='thing'>
              <small>Stargazing, playing piano and so on!</small>
              </div>
            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon' />
              <h5>Fun facts!</h5>
              <div className='thing'>
              <small>I have been learning german for 5 years</small>
              </div>
            </article>
          </div>

          <p>
            Hello there, my name is Vaibhavi and I'm a JC1 student from ACSI. Above you can see some quick facts about me as well! Currently, I am doing my IB diploma, with the subject combination of Physics, Chemistry, Maths at higher level and Econs, Hindi B and Lang/Lit at standard level. You can read up more about some of my achievements in acads/non-acads in this portfolio :)
          </p>
        </div>
      </div>
      </section>
      </div>
    </motion.div>
  );
};

export default About;