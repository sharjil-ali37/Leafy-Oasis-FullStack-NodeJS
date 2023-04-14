import './App.css';
import Foot from './Components/Footer';

import Search from './Pages/Search';
import Login from './Pages/Login';

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Contact from './Pages/Contact';
import About from './Pages/About';




function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />}> 
          <Route path="/" element={<LandingPage />} />
          <Route path="/services" element={<Search />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter>
    
    <Foot />     
    </>
  )
}

export default App;
