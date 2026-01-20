import '../../styles/home/footer.css'

function Footer() {
  return (
    <footer className="footer">
      {/* Contact Section */}
      <section className="contact-section">
        <h2>Find Us</h2>
        <div className="contact-info">
          <p>📍 Address: [actual address]</p>
          <p>📞 Phone: +965 XXXX XXXX</p>
          <p>📧 Email: info@cafeteriahalab.com</p>
          <p>⏰ Hours: 10 AM - 11 PM Daily</p>
        </div>
        <div className="contact-map">
          {/* Google Map will go here */}
          <iframe
            title="Cafeteria Halab Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789!2d47.978123!3d29.375123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9b8a1234567%3A0xabcdef123456789!2sCafeteria%20Halab!5e0!3m2!1sen!2sus!4v1671234567890"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: '8px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer bottom */}
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
