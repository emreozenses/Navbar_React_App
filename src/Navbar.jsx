import React, { useState } from 'react'
import { links } from './data';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const [showLinks,setShowLinks] = useState(true);

  return (
    <section>
        
        <div className="links" >
            {showLinks && links.map((link)=>{
                const {id,url,text} = link;
                return (
                  <a href={url} key={id}>
                    {text}
                  </a>
                )
            })}
            </div>
            <button type='button' onClick={()=>setShowLinks(!showLinks)}><FaBars/></button>
        
    </section>
  )
}

export default Navbar