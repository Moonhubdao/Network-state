import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Main from "./components/Main/Main"
import { NavBar } from "./components/NavBar/NavBar"
import Team from "./components/Team/Team"


function App() {
  

  return (
    <>
      <NavBar />
      <Hero />
      <Main/>
      <About/>
      <Team/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
