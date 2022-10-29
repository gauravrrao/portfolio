import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <>
        <div className='header'>
            <h2>Gaurav Rao</h2>
            <div>
                <ul className='list'>
                    <NavLink className="list" to="/" ><li>Home</li></NavLink>
                    {/* <NavLink className="list" to="/project "><li>Project</li></NavLink> */}
                    <NavLink className="list" to="/skills"><li>Skills</li></NavLink>
                    <NavLink className="list" to="/about"><li>Project</li></NavLink>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Header