import '../App.css'
import MenuSection from '../components/menu/MenuSection.component.tsx'
import { menuData } from '../data/menuData'

function MenuPage() {
  return (
    <>
      <MenuSection
        title="⭐ Most Popular ⭐"
        items={menuData.mostPopular}
      />

      <MenuSection
        title="🍽️ Main Dishes"
        items={menuData.mains}
      />

      <MenuSection
        title="🍟 Sides"
        items={menuData.sides}
      />

      <MenuSection
        title="🥤 Drinks"
        items={menuData.drinks}
      />

      <MenuSection
        title="🍰 Desserts"
        items={menuData.desserts}
      />
    </>
  )
}

export default MenuPage
