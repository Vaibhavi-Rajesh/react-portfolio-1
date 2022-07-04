import React from 'react';
import './Cca.css'

import Image from '../images/background.jpg';
import { motion } from 'framer-motion';
import { animationOne, } from '../animations';
import {GiMusicalScore} from 'react-icons/gi'
import { BiCheck } from 'react-icons/bi';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';



const data = [
    {
        
        name: 'Some of my achievements in music',
        review:   <ul className='services_list'>
        <li>
            <BiCheck className='serivce-list-icon' />
            <p>Achieved a certificate of merit for Grade 8 ABRSM practical piano and music theory</p>
        </li>
        <li>
            <BiCheck className='serivce-list-icon' />
            <p>Student conductor for ACSI's guitar orchestra in the Festival of the Arts 2022</p>
        </li>
        <li>
        <BiCheck className='serivce-list-icon' />
        <p>Achieved a certificate of merit for Grade 8 RAD ballet</p>
        </li>
        </ul>

    },
    {
        
        name: 'Notable performances I was part of',
        review: <ul className='services_list'>
        <li>
            <BiCheck className='serivce-list-icon' />
            <p>Festival of the Arts in 2022 and 2023</p>
        </li>
        <li>
            <BiCheck className='serivce-list-icon' />
            <p>Singapore Youth Festival 2023</p>
        </li>
        <li>
        <BiCheck className='serivce-list-icon' />
        <p>Honours Day 2022</p>
        </li>
        </ul>
    },
    {
       
        name: 'Contributions to my CCA, guitar orchestra',
        review: <ul className='services_list'>
        <li>
            <BiCheck className='serivce-list-icon' />
            <p>Part of EXCO as welfare admin and section leader for contrabass/guitarron section</p>
        </li>
        <li>
            <BiCheck className='serivce-list-icon' />
            <p>Organised CCA sessions with my fellow EXCO members</p>
        </li>
        <li>
        <BiCheck className='serivce-list-icon' />
        <p>Held position as student conductor for the Festival of the Arts performance in 2022</p>
        </li>
        </ul>

    }
]

const CCA = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
      <div className='CCA'>
      <section id='CCA'>
        <div className='Headers'>
        <h3>My non-academic achievements in</h3>
        <h1>Music</h1>
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
                              <GiMusicalScore className='about_icon' />
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
        <div className='about_me_guitar'>
          <div className='about_me_guitar-image'>
            <img src={Image} alt='About Image' />
          </div>
        </div>
        <div className='container Guitar_orch'>
          <h3>Guitar orchestra</h3>
          <p>
            From 2022-2023, I was part of the guitar Orchestra at ACSI as part of my CCA. I took up various roles, as part of the EXCO, as well as being the section leader for the contrabass/guitarron section. Other than that, I also took up the role as the lead pianist and student conductor for some of our performances. 
          </p>
          </div>
        </div>

        <div className='container about_container'>
        <div className='about_me_music'>
          <div className='about_me_music-image'>
            <img src={Image} alt='About Image' />
          </div>
        </div>
        <div className='Piano'>
          <h3>Taking up the piano</h3>
          <p>
            As of now, I have been learning the piano for over 12 years and have achieved a certificate of merit for both practical and theory. Currently, I also help out as the lead pianist for the guitar orchestra when needed, along with a few of my other EXCO members!
          </p>
          </div>
        </div>
      
      </section>
      </div>
    </motion.div>
  );
};

export default CCA;