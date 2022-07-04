import React from 'react';
import './Research.css'
import Image from '../images/background.jpg';
import { motion } from 'framer-motion';
import { animationOne, } from '../animations';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Research = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
      <section id='Research'>
        <div className='Research'>
        <div className='header'>
        <h3>A summary of</h3>
        <h1>My mentorship/internship experiences</h1>
        </div>
        <div className='container experience_container'>
            <div className='experience_frontend'>
                <div className='Headerz'>
                <h3>Research experiences</h3>
                </div>
                <div className='experience_content'>
                    <article className='experience_details'>
                        <AiOutlineArrowRight className='experience_details-icon'/>
                        <div>
                        <h4>NRP</h4>
                        <small className='text-light'>2022-2023</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <AiOutlineArrowRight className='experience_details-icon'/>
                        <div>
                        <h4>SUTD Research Mentorship</h4>
                        <small className='text-light'>2022-2023</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <AiOutlineArrowRight className='experience_details-icon'/>
                        <div>
                        <h4>Chem.comm challenge</h4>
                        <small className='text-light'>2020-2021</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <AiOutlineArrowRight className='experience_details-icon'/>
                        <div>
                        <h4>NRP jr</h4>
                        <small className='text-light'>2020-2021</small>
                        </div>
                    </article>
                    
                </div>
            </div>

            <div className='experience_backend'>
                
                    <h3>Mentorship/Internship experiences</h3>
        
                <div className='experience_content'>
                    <article className='experience_details'>
                        <AiOutlineArrowRight className='experience_details-icon'/>
                        <div>
                        <h4>Abbot STEM Internship</h4>
                        <small className='text-light'>2022</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <AiOutlineArrowRight className='experience_details-icon'/>
                        <div>
                        <h4>GIT Summer Internship</h4>
                        <small className='text-light'>2022</small>
                        </div>
                    </article>
                    <article className='experience_details'>
                        <AiOutlineArrowRight className='experience_details-icon'/>
                        <div>
                        <h4>Science Center Internship Programme</h4>
                        <small className='text-light'>2021</small>
                        </div>
                    </article>
                </div>
            </div>
        </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Research;