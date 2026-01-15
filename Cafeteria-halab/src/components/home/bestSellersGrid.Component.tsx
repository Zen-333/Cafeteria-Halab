import '../../styles/home/bestSellersGrid.css'
import chickenShawarmaImg from "../../assets/Images/Chicken-shawarma.jpg"
import meatShawarmaImg from "../../assets/Images/Meat-shawarma.jpg"
import friesImg from "../../assets/Images/Fries.jpg"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


const bestSellers = [
  {
    id: 1,
    name: 'Chicken Shawarma',
    description: 'Marinated chicken, garlic sauce, fresh bread',
    image: chickenShawarmaImg,
  },
  {
    id: 2,
    name: 'Meat Shawarma',
    description: 'Slow-roasted beef with Aleppo spices',
    image: meatShawarmaImg,
  },
  {
    id: 3,
    name: 'Halab Fries',
    description: 'Crispy fries with signature sauce',
    image: friesImg,
  },
]


function BestSellersGrid() {
  return (
    <section className="BSG">
<h2 className="BSG-mostPopular">
  <FontAwesomeIcon
    icon={faStar}
    beat
    style={{color: "#c0b17c",}}
    className="BSG-star"
  />
  Most Popular Picks For You
  <FontAwesomeIcon
    icon={faStar}
    beat
    style={{color: "#c0b17c",}}
    className="BSG-star"
  />
</h2>
      <div className="BSG-grid">
        {bestSellers.map(item => (
          <div className="BSG-card" key={item.id}>
            <div
              className="BSG-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className="BSG-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>

              <a
                href="https://www.talabat.com/kuwait/cafeteria-halab"
                target="_blank"
                rel="noreferrer"
                className="BSG-button"
              >
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BestSellersGrid
