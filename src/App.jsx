import { useState } from "react"
import NavBar from "../src/componentes/NavBar"
import Footer from "./componentes/Footer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home"
import Influencer from "../src/pages/Influencer"
import Empresa from "../src/pages/Empresa"
import Formulario from "../src/pages/Formulario"
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger)

function App(){

  const [isHeaderFooterShow, setIsHeaderFooterShow] = useState(true);

  const values={setIsHeaderFooterShow,isHeaderFooterShow}

   return (
    <BrowserRouter>
    {
      isHeaderFooterShow === true && <NavBar />
    }
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/influencer" element={<Influencer />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/formulario" element={<Formulario />} />
          </Routes>
          {
            isHeaderFooterShow === true && <Footer />
          }
    </BrowserRouter>
  
  )
}

export default App
