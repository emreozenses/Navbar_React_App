import React, { useState } from 'react'
import { links,social } from './data';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';

const Navbar = () => {

    const [showLinks,setShowLinks] = useState(true);

  return (
    <nav>
        
        <div className="nav-center" >
            <div className='nav-header'>
                <img src={logo} alt='logo' className='logo'/>
            <button 
            type='button' 
            onClick={()=>setShowLinks(!showLinks)}
            className='nav-toggle'
            >
                <FaBars/>
            </button>
            </div>
            {showLinks && (<div className='links-container'>
                <ul className='links'>

            {links.map((link)=>{
                const {id,url,text} = link;
                return (
                  <li key={id}>
                    <a href={url}>{text}</a>
                  </li>
                )
            })}
                </ul>
            </div>)}
        </div>
        
    </nav>
  )
}

export default Navbar