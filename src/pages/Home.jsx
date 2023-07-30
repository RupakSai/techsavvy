import React from 'react'
import "./Home.css"
import family from "../components/images/family.png"
import { Link } from 'react-router-dom'
import {BiRightArrowCircle} from 'react-icons/bi'

const Home = () => {
  return (
    <div className='home flexAllCol'>
      <p className='title'>Welcome to TrendSavvy!</p>
      <div className='famcon flexAll'>
        <img src={family} alt="" height={200} />
        <p>Shop your style, embrace your individuality. Unleash the ultimate online shopping experience at our E-commerce emporium!</p>
      </div>
      <Link to='/products' className='btn flexAll'>Start Shopping <BiRightArrowCircle className='arrow' /></Link>
    </div>
  )
}

export default Home
