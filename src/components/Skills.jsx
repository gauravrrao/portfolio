import React from 'react'
import './skills.css'

const Skills = () => {
  return (
    <div className='skill'>
      <div className="skill-box1">
        <h2>Tech Skills</h2>
        <ul>
          <li><h3>Languages</h3> - C , C++ , Java , JavaScript , Solidity</li>
          <li><h3>Web Technologies</h3> - HTML , CSS , ReactJS , Redux , NodeJS</li>
          <li><h3>BlockChain</h3> -  BlockChain , SmartContract , Web 3.js , Ethereum , truffle</li>
        </ul>
        </div>
        <div className="skill-box2">
          <h2>Soft Skills</h2>
          <ul>
            <li>Responsible</li>
            <li>Creative</li>
            <li>Hard Working</li>
            <li>Fast Learner</li>
          </ul>
        </div>
      
    </div>
  )
}

export default Skills