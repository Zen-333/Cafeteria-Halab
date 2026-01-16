import '../../styles/home/reviews.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const reviews = [
  {
    id: 1,
    name: 'Ahmed Al-Mansour',
    location: 'Kuwait City',
    rating: 5,
    text: 'The most authentic Aleppo shawarma I\'ve had outside of Syria. The spices are perfect, the bread is fresh, and every bite takes me back home.',
    date: 'December 2024'
  },
  {
    id: 2,
    name: 'Sarah Abdullah',
    location: 'Salmiya',
    rating: 5,
    text: 'Exceptional quality and service! The chicken shawarma is tender and flavorful. My family orders from here at least twice a week.',
    date: 'January 2025'
  },
  {
    id: 3,
    name: 'Mohammed Khalil',
    location: 'Hawalli',
    rating: 5,
    text: 'Best Syrian food in Kuwait, hands down. The meat shawarma is incredible - slow-roasted to perfection with the perfect blend of Aleppo spices.',
    date: 'January 2025'
  },
  {
    id: 4,
    name: 'Layla Hassan',
    location: 'Jabriya',
    rating: 5,
    text: 'The garlic sauce alone is worth the visit! Everything is fresh, portions are generous, and the flavors are authentic. Highly recommended!',
    date: 'December 2024'
  },
  {
    id: 5,
    name: 'Omar Farouk',
    location: 'Farwaniya',
    rating: 5,
    text: 'A true taste of heritage. The attention to detail in every dish shows the passion behind Cafeteria Halab. The fries are addictive!',
    date: 'January 2025'
  }
]

function ReviewsComponent() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000) // Change review every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentReview = reviews[currentIndex]

  return (
    <section className="reviews-section">
      <div className="reviews-container">
        <h2 className="reviews-header">What Our Customers Say</h2>
        <p className="reviews-subheader">Authentic flavors, genuine appreciation</p>

        <div className="reviews-carousel">
          <div className="review-card" key={currentReview.id}>
            <FontAwesomeIcon 
              icon={faQuoteLeft} 
              className="review-quote-icon"
            />
            
            <div className="review-stars">
              {[...Array(currentReview.rating)].map((_, i) => (
                <FontAwesomeIcon 
                  key={i}
                  icon={faStar} 
                  className="review-star"
                />
              ))}
            </div>

            <p className="review-text">{currentReview.text}</p>

            <div className="review-author">
              <div className="review-author-info">
                <h4 className="review-author-name">{currentReview.name}</h4>
                <p className="review-author-location">{currentReview.location}</p>
              </div>
              <p className="review-date">{currentReview.date}</p>
            </div>
          </div>

          <div className="review-indicators">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`review-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsComponent