import React, { useRef, useEffect, useCallback} from 'react';
import './Hero.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './About';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from '../images/planet.svg';
import PlanetTwo from '../images/planet-2.svg';
import PlanetThree from '../images/planet-3.svg';
import PlanetFour from '../images/planet-4.svg';
import { useSpring, animated } from 'react-spring';

import { MdClose } from 'react-icons/md'


const Section = styled.section`
  display: flex;
  justify-content: centre;
  align-items: top;
  
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 200vh;
  padding: 3rem 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    height: 300vh
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
  color: #fff;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 250px;
  max-height: 250px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7rem;
  position: relative;

  @media screen and (max-width: 1000px) {
    padding: 15rem
  }

  ${Image}:nth-child(1) {
    top: 150px;
    left: 10px;

    @media screen and (max-width: 1000px) {
      top: -100px;
      left: 10px
    }
  }

  ${Image}:nth-child(2) {
    top: 250px;
    right: 10px;
    @media screen and (max-width: 1000px) {
      top: 100px;
      right: 50px
    }
  }

  ${Image}:nth-child(3) {
    top: 450px;
    left: 50px;

    @media screen and (max-width: 1000px) {
      top: 350px;
      left: 50px
    }
  }

  ${Image}:nth-child(4) {
    top: 600px;
    right: 30px;
    @media screen and (max-width: 1000px) {
      top: 550px;
      right: 30px
    }    
  }
`;


const Hero = ( {showModal, setShowModal}) => {

  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };



  
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Hello, my name is Vaibhavi and...
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Welcome to my portfolio!
          </motion.p>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Click the navigation bar below!
          </motion.h1>
          
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={PlanetOne}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
           
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetTwo}
            alt='planet'
            whileTap={{ scale: 0.6 }}
            drag={true}
            
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetThree}
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
          
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetFour}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
           
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;