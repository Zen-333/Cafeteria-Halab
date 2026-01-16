import '../../styles/home/about.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faAward, 
  faShieldHalved, 
  faHeart, 
  faStar 
} from '@fortawesome/free-solid-svg-icons'

function AboutComponent() {
  return (
    <section className="about-section">
      <div className="about-container">
        {/* Main Header */}
        <div className="about-header">
          <h2 className="about-title">
            The Heritage of
            <span className="about-highlight"> Aleppo</span>
          </h2>
          <p className="about-subtitle">حلب الأصيلة في الكويت</p>
        </div>

        {/* Story Section */}
        <div className="about-story">
          <p className="about-intro">
            At <strong>Cafeteria Halab</strong>, we bring the authentic flavors 
            of Aleppo Syria's culinary capital to the heart of Kuwait. Every dish 
            is a celebration of centuries old recipes, prepared with passion and 
            precision by chefs who carry the traditions of their homeland.
          </p>

          <p className="about-description">
            We believe that great food begins with great ingredients. That's why 
            we source only <strong>premium Australian beef</strong>, known worldwide 
            for its exceptional quality and rich flavor. Combined with our signature 
            Aleppo spices and traditional slow roasting techniques, we create shawarma 
            that's simply unforgettable.
          </p>
        </div>

        {/* Features Grid */}
        <div className="about-features">
          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FontAwesomeIcon 
                icon={faAward} 
                className="feature-icon"
              />
            </div>
            <h3 className="feature-title">Premium Quality</h3>
            <p className="feature-text">
              100% Australian beef, fresh vegetables, and authentic Syrian spices 
              sourced with care for unmatched flavor and quality.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FontAwesomeIcon 
                icon={faShieldHalved} 
                className="feature-icon"
              />
            </div>
            <h3 className="feature-title">Hygiene Excellence</h3>
            <p className="feature-text">
              Our kitchen maintains the highest international hygiene standards. 
              Every surface, every ingredient, every dish prepared in pristine conditions.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FontAwesomeIcon 
                icon={faHeart} 
                className="feature-icon"
              />
            </div>
            <h3 className="feature-title">Made with Love</h3>
            <p className="feature-text">
              Traditional recipes passed down through generations, prepared by 
              experienced chefs who treat every dish as a labor of love.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon-wrapper">
              <FontAwesomeIcon 
                icon={faStar} 
                className="feature-icon"
              />
            </div>
            <h3 className="feature-title">Authentic Taste</h3>
            <p className="feature-text">
              The true flavors of Aleppo from our slow roasted meats to our 
              house-made garlic sauce, every bite is genuine Syrian heritage.
            </p>
          </div>
        </div>

        {/* Commitment Section */}
        <div className="about-commitment">
          <div className="commitment-badge">
            <h3 className="commitment-title">Our Promise</h3>
          </div>
          <p className="commitment-text">
            We are committed to delivering not just meals, but memorable experiences. 
            From the moment you order to the first bite, we ensure every aspect meets 
            our exacting standards. <strong>Fresh ingredients. Immaculate preparation. 
            Authentic flavors.</strong> This is the Cafeteria Halab difference.
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutComponent