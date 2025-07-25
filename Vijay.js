import React from 'react'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import { Link } from 'react-router-dom'
import Contact from './Contact'


const Vijay = () => {
  return (
    <div className="Div1">
      <div className ="cnt"> <h1 className="VK1">
        Hello I am VIJAY KRISHNAN <br />
        I am a full stack web developer
      </h1>
      <div className="div2">
</div>
    </div>
     

      <div className="VK2">
        <Link to="/Home" className="b1">
          Home
        </Link>
        <Link to="/About" className="b1">
          About
        </Link>
        <Link to="/Skills" className="b1">
          Skills
        </Link>
        <Link to="/Contact" className="b1">
          Contact
        </Link>
      </div>

      <div>
        {/* <Home />
        <About />
        <Skills />
        <Contact /> */}
        
      </div>
    </div>
  )
}

export default Vijay
