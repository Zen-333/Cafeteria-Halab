
import '../../styles/home/navigationBar.css'
import HalabLogo from "../../assets/Images/Halab-Logo.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBars, faAddressBook } from '@fortawesome/free-solid-svg-icons'


function NavigationBarComponent() {

  return (
    <div>
        <div className="container">
            <nav className="content">
                <img className="logo" src={HalabLogo} alt="Halab Logo"/>
                <ul id="sidemenu">
                    <li><FontAwesomeIcon icon={faBook} style={{color: "#ceab60",}} /><a href="#ourStory">Our Story</a></li>
                    <li><FontAwesomeIcon icon={faBars} style={{color: "#ceab60",}}/><a href="#menu">Menu</a></li>
                    <li><FontAwesomeIcon icon={faAddressBook} style={{color: "#ceab60",}}/><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default NavigationBarComponent