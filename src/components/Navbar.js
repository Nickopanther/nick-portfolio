import React from 'react'
import { Link } from 'gatsby'

export default function Navbar() {

    return (
        <nav>
            <h1><Link to="/">Nick Azzarello</Link></h1>            
            <div className="links">
               <Link to="/">Home</Link>
               <Link to="/about">About</Link>
               <Link className="dropdown" to="/projects">
                   Projects
                   <div className="dropdown-content">
                        <Link to="/projects/alexa-skills">Alexa Skills</Link>
                        <Link to="/projects/videos">Videos</Link>
                        <Link to="/projects/websites">Websites</Link>
                   </div>
                </Link>
               <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}
