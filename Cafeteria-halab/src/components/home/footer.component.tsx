import '../../styles/home/footer.css'

function Footer() {
  return (
    <footer className="footer">
      <section className="contact-section">
        <h2>Find Us</h2>
        <div className="contact-info">
          <p>📍 Address: [Your actual address]</p>
          <p>📞 Phone: +965 XXXX XXXX</p>
          <p>📧 Email: info@cafeteriahalab.com</p>
          <p>⏰ Hours: 10 AM - 11 PM Daily</p>
        </div>
        <div className="contact-map">
        </div>
      </section>
      <div className="footer-content">
        <p className="footer-brand">
          © {new Date().getFullYear()} Cafeteria Halab
        </p>

        <p className="footer-tagline">
          Authentic Aleppo Food
        </p>
      </div>
    </footer>
  )
}

export default Footer
