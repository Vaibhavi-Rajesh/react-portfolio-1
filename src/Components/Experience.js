import React from 'react';
import './Experience.css'
import {BiCheck} from 'react-icons/bi'
import { motion } from 'framer-motion';
import { animationOne, } from '../animations';


const Experience = () => {
  return (
    <motion.div initial='out' animate='in' exit='out' variants={animationOne}>
        <div className ='Service'>
      <section id='Experience'>
        <div className='Headers'>
            <h3>A list of my</h3>
            <h1>Achievements</h1>
        </div>

        <div className='container services_container'>
            <article className='service'>
                <div className='service_head'>
                    <h3>Others</h3>
                </div>

                <ul className='services_list'>
                    <li>
                        <BiCheck className='serivce-list-icon' />
                        <p>2nd place nationally for the National Flash Fiction writing challenge</p>
                    </li>
                    <li>
                        <BiCheck className='serivce-list-icon' />
                        <p>Selected to represent MGS in the finals for the FPSP Senario Writing Competition</p>
                    </li>
                    <li>
                    <BiCheck className='serivce-list-icon' />
                    <p>Won best position paper for the Singapore Model United Nations in 2021</p>
                    </li>
                    <li>
                    <BiCheck className='serivce-list-icon' />
                    <p> Took part in the Singapore LitFest in 2021</p>
                    </li>
                
                </ul>
            </article>
            

            <article className='service'>
                <div className='service_head'>
                    <h3>Chem/Phy/Bio</h3>
                </div>

                <ul className='services_list'>
                    <li>
                        <BiCheck className='serivce-list-icon' />
                        <p>1st place globally for the University of Waterloo - High School Exam in Chemistry in 2022</p>
                    </li>
                    <li>
                        <BiCheck className='serivce-list-icon' />
                        <p>Gold for the International Biomedical Quiz in 2021</p>
                    </li>
                    <li>
                    <BiCheck className='serivce-list-icon' />
                    <p>Bronze of the Singapore Junior Chemistry Olympiad in 2021</p>
                    </li>
                    <li>
                    <BiCheck className='serivce-list-icon' />
                    <p> Merit for the Singapore Junior Biology Olympiad in 2020</p>
                    </li>
                    <li>
                     <BiCheck className='serivce-list-icon' />
                     <p> Selected to represent MGS in the National Science Challenge in 2020</p>
                    </li>
                    <li>
                        <BiCheck className='serivce-list-icon' />
                         <p> Selected to represent MGS in the Chem.Comm challenge in 2021</p>
                    </li>
                </ul>
            </article>
            <article className='service'>
                <div className='service_head'>
                    <h3>Math</h3>
                </div>

                <ul className='services_list'>
                    <li>
                        <BiCheck className='serivce-list-icon' />
                        <p>Gold for Singapore Asian Schools Maths Olympaid in 2021, 2020, 2019 and 2018</p>
                    </li>
                    <li>
                        <BiCheck className='serivce-list-icon' />
                        <p>Silver for the Singapore Mathematical Olympaid in 2019 and 2018</p>
                    </li>
                    <li>
                    <BiCheck className='serivce-list-icon' />
                    <p>Certificate of high distinction for the Australian Maths Challenge in 2021 and 2019</p>
                    </li>
                    <li>
                    <BiCheck className='serivce-list-icon' />
                    <p> Certificate of distinction for the Australian Mathamatics Competition in 2021, 2020, 2019 and 2018</p>
                    </li>
                   
                </ul>
            </article>

        </div>
      </section>
      </div>
    </motion.div>
  );
};

export default Experience;