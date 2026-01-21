import '../App.css'

import HeroSection from "../components/home/heroSection.component.tsx"
import BestSellersComponent from '../components/home/bestSellers.component.tsx'
import ReviewsComponent from '../components/home/reviews.component.tsx'
import AboutComponent from '../components/home/about.component.tsx'

function HomePage() {

  return (
    <>
    <HeroSection/>
    <BestSellersComponent/>
    <ReviewsComponent/>
    <AboutComponent/>
    </>
  )
}

export default HomePage
