import '../../styles/home/footer.css'

function Footer() {
  return (
    <footer className="footer">
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
