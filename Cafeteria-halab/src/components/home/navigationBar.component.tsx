import '../../styles/home/navigationBar.css'
import HalabLogo from "../../assets/Images/Halab-Logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBars, faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

function NavigationBarComponent() {
  return (
    <div>
      <div className="container">
        <nav className="content">
          <img className="logo" src={HalabLogo} alt="Halab Logo"/>
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
                <FontAwesomeIcon icon={faBook} style={{color: "#ceab60"}}/>
                <a href="#ourStory">Our Story</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faBars} style={{color: "#ceab60"}}/>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faAddressBook} style={{color: "#ceab60"}}/>
                <a href="#contact">Contact</a>
              </li>
            </ul>

          </div>
        </nav>
      </div>
    </div>
  )
}

export default NavigationBarComponent
