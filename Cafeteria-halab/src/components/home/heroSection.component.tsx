
import '../../styles/home/heroSection.css'
import heroVideo from '../../assets/videos/hero.mp4' 

function HeroSection() {

    function btnClick() {
        window.open("https://www.talabat.com/kuwait/cafeteria-halab");
    }

  return (
    <section className="heroSection">
      <video
        className="heroSection-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="heroSection-overlay" />

      <div className="heroSection-content">
        <button className="heroSection-button" onClick={btnClick}>
          Get a Taste
        </button>
      </div>
    </section>
  )
}

export default HeroSection