
import '../../styles/home/navigationBar.css'
import HalabLogo from "../../assets/Images/Halab-Logo.png"


function NavigationBarComponent() {

  return (
    <div>
        <div className="container">
            <nav className="content">
                <img className="logo" src={HalabLogo} alt="Halab Logo"/>
                <ul id="sidemenu">
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default NavigationBarComponent