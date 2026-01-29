import '../App.css'
import '../styles/ourStory/ourStoryPage.css'
import TeamHeroImg from "../assets/Images/team-photo.png" 
import Member1 from "../assets/Images/member-1.jpg"
import Member2 from "../assets/Images/member-2.jpg"
import Member3 from "../assets/Images/member-3.jpg"

function OurStoryPage() {

      function btnClick() {
        window.open("https://www.talabat.com/kuwait/cafeteria-halab");
    }

  return (
    <>
      {/* Hero Section */}
      <section className="story-hero">
        <img src={TeamHeroImg} alt="background team image" className='hero-team-image'/>
        <div className="story-hero-overlay">
          <h1 className="story-hero-title">
            Our Journey in Aleppo Cuisine
          </h1>
          <p className="story-hero-subtitle">
            Crafting Authentic Flavors, One Dish at a Time
          </p>
          <a href='#team'><button className="story-hero-cta">Meet the Team</button></a>
        </div>
      </section>


      {/* History / About Section */}
      <section className="story-history">
        <div className="story-container">
          <h2>From Aleppo to Your Plate</h2>
          <p>
            Cafeteria Halab was born out of passion for authentic Aleppo cuisine.
            Our team has been perfecting traditional recipes for generations,
            ensuring every bite carries the warmth and heritage of our beloved city.
          </p>
          <p id="team">
            We specialize in delivering fresh, mouth-watering dishes right to your door.
            Every ingredient is carefully selected, every dish crafted with love.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="story-team">
        <div className="story-container">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src={Member1} alt="Team Member 1"/>
              <h3>Ahmed Al Halabi</h3>
              <p>Head Chef & Co-Founder</p>
            </div>
            <div className="team-card">
              <img src={Member2} alt="Team Member 2"/>
              <h3>Layla Hassan</h3>
              <p>Operations Manager</p>
            </div>
            <div className="team-card">
              <img src={Member3} alt="Team Member 3"/>
              <h3>Omar Khalil</h3>
              <p>Customer Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / CTA */}
      <section className="story-mission">
        <div className="story-container">
          <h2>Our Mission</h2>
          <p className="mission-text">
            At Cafeteria Halab, we aim to bring the flavors of Aleppo to every home.
            From traditional recipes to modern delivery convenience, we combine
            authenticity with care to make every meal memorable.
          </p>
          <button className="story-cta" onClick={btnClick}>Order Now</button>
        </div>
      </section>
    </>
  )
}

export default OurStoryPage
