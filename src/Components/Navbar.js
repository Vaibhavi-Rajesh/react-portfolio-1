import React from 'react'
import './Navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {FaAward} from 'react-icons/fa'
import {IoMusicalNotesSharp} from 'react-icons/io5'
import {BsHeart} from 'react-icons/bs'
import {BiTestTube} from 'react-icons/bi'
import {IoTelescopeSharp} from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='nav'>
      <a href='/'><AiOutlineHome /></a>
      <a href='About'><AiOutlineUser /></a>
      <a href='Experience'><FaAward /></a>
      <a href='Research'><BiTestTube /></a>
      <a href='CCA'><IoMusicalNotesSharp /></a>
      <a href='Astro'><IoTelescopeSharp /></a>
      <a href='Cas'><BsHeart /></a>
      
    </div>
  )
}

export default Navbar