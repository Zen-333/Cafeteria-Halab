import '../../styles/home/navigationBar.css'
import { useState } from "react"
import { Link } from 'react-router-dom'
import HalabLogo from "../../assets/Images/Halab-Logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBars, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function NavigationBarComponent() {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="container">
      <nav className="content">

        <Link to="/">
          <img className="logo" src={HalabLogo} alt="Halab Logo"/>
        </Link>

        {/* Hamburger */}
        <div 
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FontAwesomeIcon icon={faBars} />
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <div className="nav-socials">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
          
          <ul id="sidemenu">
            <li onClick={() => setMenuOpen(false)}>
              <FontAwesomeIcon icon={faBook} style={{ color: "#ceab60" }} />
              <Link to="/ourStory">Our Story</Link>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <FontAwesomeIcon icon={faBars} style={{ color: "#ceab60" }} />
              <Link to="/menu">Menu</Link>
            </li>

            <li onClick={() => setMenuOpen(false)}>
              <FontAwesomeIcon icon={faAddressBook} style={{ color: "#ceab60" }} />
              <Link to="/contact">Contact</Link>
            </li>
          </ul>


        </div>
      </nav>
    </div>
  )
}


export default NavigationBarComponent
