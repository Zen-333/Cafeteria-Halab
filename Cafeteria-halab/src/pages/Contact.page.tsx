import '../styles/contact/contact.css'
import TeamHeroImg from "../assets/Images/team-photo.png" 

function ContactPage() {
  return (
    <section className="contact-page">

      {/* HERO */}
      <div className="contact-hero">
        <img src={TeamHeroImg} alt="background team image" className='hero-team-image'/>
        <div className="contact-hero-overlay">
          <h1>Get In Touch With Halab</h1>
          <p>Questions, catering requests, or special orders we’re here for you.</p>
        </div>
      </div>


      {/* MAIN GRID */}
      <div className="contact-wrapper">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h2>Contact Information</h2>
          <p>
            Our team prepares every meal with care. Reach out anytime
            we usually respond within 24hr.
          </p>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+965 XXXX XXXX</p>
          </div>

          <div className="info-card">
            <h3>📍 Location</h3>
            <p>  Kuwait</p>
          </div>

          <div className="info-card">
            <h3>🕒 Hours</h3>
            <p>Daily: 9 AM – 11 PM</p>
          </div>


          {/* ORDER CTA */}
          <a
            href="https://www.talabat.com/kuwait/cafeteria-halab"
            target="_blank"
            rel="noreferrer"
            className="order-btn"
          >
            Order Now on Talabat
          </a>

        </div>


        {/* FORM */}
        <form
          action="https://formsubmit.co/zenhamam56@gmail.com"
          method="POST"
          className="contact-form"
        >
          <h2>Send Us a Message</h2>

          <input type="hidden" name="_subject" value="New Message From Halab Website!" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <input
            type="text"
            name="Name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="Email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="Message"
            rows={6}
            placeholder="How can we help you?"
            required
          />

          <button type="submit">
            Send Message
          </button>

        </form>

      </div>

    </section>
  )
}

export default ContactPage
