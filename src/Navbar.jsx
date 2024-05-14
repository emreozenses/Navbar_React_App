import React, { useState,useRef } from 'react'
import { links,social } from './data';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';

const Navbar = () => {

    const [showLinks,setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    const toggleLinks = ()=>{
        
        setShowLinks(!showLinks);
    }
    
    const linkStyles = {
        height:
        showLinks ? 
        `${linksRef.current.getBoundingClientRect().height}px`
        :'0px'
    };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            type="button"
            onClick={toggleLinks}
            className="nav-toggle"
          >
            <FaBars />
          </button>
        </div>
        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}
          /*{
            showLinks ? 'show-container' : 'links-container'
          }*/
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              )
            })}
          </ul>
        </div>
        {/*social links*/}
        <ul className='social-icons'>
            {social.map((item)=>{
                const {id,url,icon} = item;
                return(
                    <li key={id}>
                        <a href={url}>{icon}</a>
                    </li>
                )
            })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar