import React,{useState} from 'react'
import './home.css'

const Home = () => {


  return (
    <div className='home'>
      <img className='image' src="./images/icon.png" alt="" />

      <div className="intro">
        <h3 className='line'>Hey, I am</h3>
        <h2 className='line2'>Gaurav Rao</h2>
        <p className='desc'>A React Developer and Blockchain Enthusiast</p>
      </div>

    </div>
  )
}

export default Home