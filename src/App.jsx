import Hero from "./Components/Hero/Hero"
import Navbar  from "./Components/Navbar/Navbar"
import Programs from "./Components/Programs/Programs"
import Title from "./Components/Title/Title"
import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subtitle='Our PROGRAM' title='What We Offer'/>
      <Programs/>
      <About/>
      <Title subtitle='Gallery' title='Campous Photho'/>
      <Campus/>
      <Title subtitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subtitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
      </div>
      
    </>
  )
}

export default App
