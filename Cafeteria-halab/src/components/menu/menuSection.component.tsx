import '../../styles/menu/menuSection.css'

type MenuItem = {
  id: number
  name: string
  description: string
  price: string
  image: string
}

type Props = {
  title: string
  items: MenuItem[]
}

function MenuSection({ title, items }: Props) {
  return (
    <section className="menu-section">
      <h2 className="menu-title">{title}</h2>

      <div className="menu-grid">
        {items.map(item => (
          <div className="menu-card" key={item.id}>
            <div
              className="menu-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />

            <div className="menu-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="menu-price">{item.price}</div>

              <a
                href="https://www.talabat.com/kuwait/cafeteria-halab"
                target="_blank"
                rel="noreferrer"
                className="menu-button"
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

export default MenuSection
