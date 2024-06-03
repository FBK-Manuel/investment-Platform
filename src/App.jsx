import { useEffect } from "react"
import Routers from "./Routers"
import Footer from "./components/Footer"
import NavBar from "./components/NavBar"
import ScrollToTop from "./components/ScrollToTop"
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

  useEffect(() => {
    AOS.init({
      disable: 'phone', // Disable animations on phones
      duration: 700, // Duration of the animation in ms
      easing: 'ease-out-cubic', // Easing function to use
    });

  }, [])
  return (
    <>
      <div >
        <NavBar />
        <Routers />
        <Footer />
        <ScrollToTop />

      </div>
    </>
  )
}

export default App
