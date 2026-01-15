import './App.css'
import NavigationBarComponent from "./components/home/navigationBar.component.tsx"
import HeroSection from "./components/home/heroSection.component.tsx"
import BestSellersComponent from './components/home/bestSellers.component.tsx'

function App() {

  return (
    <>
    <NavigationBarComponent/>
    <HeroSection/>
    <BestSellersComponent/>
    </>
  )
}

export default App
