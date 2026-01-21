import '../../styles/home/navigationBar.css'
import { Link } from 'react-router-dom'
import HalabLogo from "../../assets/Images/Halab-Logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBars, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function NavigationBarComponent() {
  return (
    <div>
      <div className="container">
        <nav className="content">
          <Link to="/">
            <img className="logo" src={HalabLogo} alt="Halab Logo"/>
          </Link>
          <div className="nav-links">

            <div className="nav-socials">
              <a href="#" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </div>

            <ul id="sidemenu">
              <li>
                <FontAwesomeIcon icon={faBook} style={{ color: "#ceab60" }} />
                <Link to="/ourStory">Our Story</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faBars} style={{ color: "#ceab60" }} />
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressBook} style={{ color: "#ceab60" }} />
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavigationBarComponent
