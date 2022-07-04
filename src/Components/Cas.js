import React from 'react';
import './Cas.css'
import Image from '../images/about.jpg'
import Image1 from '../images/class cas1.jpeg';
import { motion } from 'framer-motion';
import { animationOne, } from '../animations';
import {AiOutlineArrowRight} from 'react-icons/ai'

const Cas = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
      <section id='Cas'>
        <div className='Cas'>
        <div className='header'>
        <h3>A summary of</h3>
        <h1>My CAS experiences</h1>
        </div>
        <div className='container cas_container'>
            <div className='cas_frontend'>
                <div className='Headerz'>
                <h3>Creativity</h3>
                </div>
                <div className='cas_content'>
                    <article className='cas_details'>
                        <AiOutlineArrowRight className='cas_details-icon'/>
                        <div>
                        <h4>Class CAS project</h4>
                        <small className='text-light'>19 Apr 2022 - 28 Jun 2022</small>
                        </div>
                    </article>
                    <article className='cas_details'>
                        <AiOutlineArrowRight className='cas_details-icon'/>
                        <div>
                        <h4>Guitar orchestra</h4>
                        <small className='text-light'>Mar 2022- Mar 2023</small>
                        </div>
                    </article>
                    <article className='cas_details'>
                        <AiOutlineArrowRight className='cas_details-icon'/>
                        <div>
                        <h4>Project repario</h4>
                        <small className='text-light'>Apr 2022- Mar 2023</small>
                        </div>
                    </article>
            
                    
                </div>
            </div>

            <div className='cas_backend'>
                
                    <h3>Action</h3>
        
                <div className='cas_content'>
                    <article className='cas_details'>
                        <AiOutlineArrowRight className='cas_details-icon'/>
                        <div>
                        <h4>Learning ballet</h4>
                        <small className='text-light'>Mar 2022 - Mar 2023</small>
                        </div>
                    </article>
                    <article className='cas_details'>
                        <AiOutlineArrowRight className='cas_details-icon'/>
                        <div>
                        <h4>Guitar Orchestra</h4>
                        <small className='text-light'>Mar 2022 - Mar 2023</small>
                        </div>
                    </article>
                   
                </div>
            </div>


            <div className='cas_backend'>
                
                    <h3>Service</h3>
        
                <div className='cas_content'>
                    <article className='cas_details'>
                        <AiOutlineArrowRight className='cas_details-icon'/>
                        <div>
                        <h4>Project Reperio</h4>
                        <small className='text-light'>Apr 2022 - Mar 2023</small>
                        </div>
                    </article>
                    <article className='cas_details'>
                        <AiOutlineArrowRight className='cas_details-icon'/>
                        <div>
                        <h4>Class CAS project</h4>
                        <small className='text-light'>19 Apr 2022 - 28 Jun 2022</small>
                        </div>
                    </article>
                    <article className='cas_details'>
                        <AiOutlineArrowRight className='cas_details-icon'/>
                        <div>
                        <h4>Science Center Internship Programme</h4>
                        <small className='text-light'>2021</small>
                        </div>
                    </article>
                </div>
            </div>
</div>
            
        <div className='container about_container'>
        <div className='about_me_CAS'>
          <div className='about_me_CAS-image'>
            <img src={Image1} alt='About Image' />
          </div>
        </div>
        <div className='CAS'>
          <h3>Class Cas: Giving university/high school cambodians wellbeing lessons</h3>
          <p>
           We worked with Lakeside family Services to provide lessons to underpriviledged children, where we provided english lessons to them. Many encounter daily struggles at home and in school, pertianing to money, relationships etc. Through the weekly classes, we helped the Cambodians gain confidence in their English and develop them as individuals, and they became more confident and better able to navigate the challenges they face. 
    
          </p>
          </div>
        </div>


        <div className='container about_container'>
        <div className='about_me_cas'>
          <div className='about_me_cas-image'>
            <img src={Image} alt='About Image' />
          </div>
        </div>
        <div className='cas'>
          <h3>Guitar Orchestra</h3>
          <p>
            Being part of the EXCO, I was selected to take part in the SAO and Astrochallenge compeititions in 2022. Through these competitions I not only brushed up my skills in the more theretical side of astronomy, but also bonded more with my teammates, through the project, obs and teams rounds!
          </p>
          </div>
        </div>

        
        <div className='container about_container'>
        <div className='about_me_repario'>
          <div className='about_me_repario-image'>
            <img src={Image1} alt='About Image' />
          </div>
        </div>
        <div className='repario'>
          <h3>Project Repario</h3>
          <p>
         Project Repario aims to increase the educational opportunities available to refugees by working with Cahaya Surya Bakti, a NGO dedicated to educating the children of Rohingya refugees in Malaysia. I offered tuition for english, in accordance with the IGCSE syllabus, given that this is the examination they are preparing for. I had a lot of fun teaching the kids new vocab and just talking with them to improve their command of english and their confidence!
    
          </p>
          </div>
        </div>

        <div className='container about_container'>
        <div className='about_me_dance'>
          <div className='about_me_dance-image'>
            <img src={Image1} alt='About Image' />
          </div>
        </div>
        <div className='dance'>
          <h3>Learning ballet</h3>
          <p>
         Project Repario aims to increase the educational opportunities available to refugees by working with Cahaya Surya Bakti, a NGO dedicated to educating the children of Rohingya refugees in Malaysia. I offered tuition for english, in accordance with the IGCSE syllabus, given that this is the examination they are preparing for. I had a lot of fun teaching the kids new vocab and just talking with them to improve their command of english and their confidence!
    
          </p>
          </div>
        </div>

        </div>
        
      </section>
    </motion.div>
  );
};

export default Cas;