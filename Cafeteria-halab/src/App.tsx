import './App.css'
import { Routes, Route } from 'react-router-dom'
import NavigationBarComponent from "./components/home/navigationBar.component.tsx"
import Footer from "./components/home/footer.component.tsx"
import ScrollToTop from "./components/layout/scrollToTop.tsx"

import HomePage from "./pages/Home.page.tsx"
import OurStoryPage from "./pages/OurStory.page.tsx"
import MenuPage from "./pages/Menu.page.tsx"
import ContactPage from "./pages/Contact.page.tsx"

function App() {

  return (
    <>
      <NavigationBarComponent />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ourStory" element={<OurStoryPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
