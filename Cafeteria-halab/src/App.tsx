import './App.css'
import NavigationBarComponent from "./components/home/navigationBar.component.tsx"
import HeroSection from "./components/home/heroSection.component.tsx"
import BestSellersComponent from './components/home/bestSellers.component.tsx'
import ReviewsComponent from './components/home/reviews.component.tsx'
import AboutComponent from './components/home/about.component.tsx'
import Footer from "./components/home/footer.component.tsx"


function App() {

  return (
    <>
    <NavigationBarComponent/>
    <HeroSection/>
    <BestSellersComponent/>
    <ReviewsComponent/>
    <AboutComponent/>
    <Footer/>
    </>
  )
}

export default App
