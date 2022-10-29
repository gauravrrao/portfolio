import React from 'react'
import './about.css'

const About = () => {
  return (
    <>
     <div className='project-box'>
      <h2 className='p-name'>Projects</h2>
      <div className="content-box">
      <ol>
        <li><h3>BLOCKCHAIN BASED LOTTERY SMART CONTARCT:</h3></li>
        <ul>
          <p>•	Created Lottery Smart Contract project which have ownership , lottery transaction</p>
          <p>•	This project is work on decentralized distributed immutable ledger . <span><a className='span' href="https://github.com/gauravrrao/smart-contract" target="__blank">GitHub Repository</a></span></p>
          
        </ul>
        <li><h3>	MOVIE STREAMING WEBSITE:</h3></li>
        <ul>
          <p>•	Movie Streaming website | Interactive response | Search feature | Login Logout.</p>
          <p>•	Tools/Technologies used in this project is HTML, CSS, JavaScript ,React Js  <span><a className='span' href="https://github.com/gauravrrao/movie-website" target="__blank">GitHub Repository</a></span></p>
         
        </ul>
        <li><h3>E-COMMERCE WEBSITE:</h3></li>
        <ul>
        <p>•	E - commerce website | Add items into cart | Interactive response | Search feature.</p>
        <p>•	Tools/Technologies used in this project is HTML, CSS, JavaScript , React Js.  <span><a className='span' href="https://github.com/gauravrrao/ecommerce-website" target="__blank">GitHub Repository</a></span></p>
        </ul>
        <li><h3>SHOPPING WEBSITE:</h3></li>
        <ul>
        <p>•	E - commerce website | Add items into cart | Interactive response | Search feature.</p>
        <p>•	Tools/Technologies used in this project is HTML, CSS, JavaScript , React Js.  <span><a className='span' href="https://github.com/gauravrrao/shopping-website" target="__blank">GitHub Repository</a></span></p>
        </ul>

      </ol>
      </div>
    </div>
    </>
  )
}

export default About