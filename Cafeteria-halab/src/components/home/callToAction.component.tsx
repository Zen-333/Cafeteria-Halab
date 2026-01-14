
import '../../styles/home/callToAction.css'
import heroVideo from '../../assets/videos/hero.mp4' // adjust path

function CallToAction() {

    function btnClick() {
        window.open("https://www.talabat.com/kuwait/cafeteria-halab");
    }

  return (
    <section className="cta">
      <video
        className="cta-video"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="cta-overlay" />

      <div className="cta-content">
        <button className="cta-button" onClick={btnClick}>
          Get a Taste
        </button>
      </div>
    </section>
  )
}

export default CallToAction