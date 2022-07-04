import React from 'react';


import Image from '../images/background.jpg';
import { motion } from 'framer-motion';
import { animationOne, } from '../animations';
import Navbar from './Navbar';

import './Astro.css'
import {TbMoonStars} from 'react-icons/tb'
import { BiCheck } from 'react-icons/bi';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';




const data = [
  {
      
      name: 'Why I joined astronomy?',
      review: 'I was always really interested in astronomy since young so when I got the chance to join the astronomy club in ACSI, I got the chance to man technical equipment, like equitorial mounts, motorised mounts etc and even represent ACSI in competitions'

  },
  {
      
      name: 'Some of my achievements in astronomy',
      review: <ul className='services_list'>
      <li>
          <BiCheck className='serivce-list-icon' />
          <p>I was part of the EXCO team, holding the role as the observatory admin</p>
      </li>
      <li>
          <BiCheck className='serivce-list-icon' />
          <p>Was in charge of one of the largest scopes in singapore, being 14 inches in diameter</p>
      </li>
      <li>
      <BiCheck className='serivce-list-icon' />
      <p>Selected to represent ACSI at the Singapore Astronomy Olympiad 2022</p>
      </li>
      </ul>
  },
  {
     
      name: 'Contributions to my CCA, the astronomy club',
      review: <ul className='services_list'>
      <li>
          <BiCheck className='serivce-list-icon' />
          <p>Helped to plan for sessions pertaining to observational astronomy</p>
      </li>
      <li>
          <BiCheck className='serivce-list-icon' />
          <p>Helped plan for and conduct stargazing sessions along wth my fellow EXCO members</p>
      </li>
      <li>
      <BiCheck className='serivce-list-icon' />
      <p>Selected to represent ACSI in Astrochallenge 2022</p>
      </li>
      </ul>

  }
]

const Astro = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
      <section id='Astro'>
        <div className='Astro'>
      <div className='Headers'>
        <h3>My non-academic achievements in</h3>
        <h1>Astronomy</h1>
        </div>

        <Swiper className='container testimonials_container'
    
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
   
            pagination={{ clickable: true }}>
      
            {
                data.map(({name, review}, index) => {
                    return (
                        <SwiperSlide key={index} className='testimonial'>
                              <TbMoonStars className='about_icon' />
                             <h5 className='client_name'>{name}</h5>
                             <small className='client_review'>{review}
                              </small>
                            </SwiperSlide>
                    )
                } 
                )
            }
        </Swiper>
        <div className='container about_container'>
        <div className='about_me_astro'>
          <div className='about_me_astro-image'>
            <img src={Image} alt='About Image' />
          </div>
        </div>
        <div className='astro'>
          <h3>Selected to be part of the EXCO team for the astronomy club</h3>
          <p>

            From 2022-2023, I was part of the astronomy club in ACSI and had the priviledge of conducting sessions, especially those pertaining to practical and observatonal astronomy. I helped conduct stargazing sessions, usually taking place fortnightly, where I taught our junior members basic skills for manning telescopes.
          </p>
          </div>
        </div>

        <div className='container about_container'>
        <div className='about_me_ast'>
          <div className='about_me_ast-image'>
            <img src={Image} alt='About Image' />
          </div>
        </div>
        <div className='ast'>
          <h3>Taking part in competitions</h3>
          <p>
            Being part of the EXCO, I was selected to take part in the SAO and Astrochallenge compeititions in 2022. Through these competitions I not only brushed up my skills in the more theretical side of astronomy, but also bonded more with my teammates, through the project, obs and teams rounds!
          </p>
          </div>
        </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Astro;