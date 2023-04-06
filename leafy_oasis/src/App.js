import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Foot from './Components/Footer';
import Card from './Components/Card';
import LandingPage
 from './Pages/LandingPage';

 import ParallaxScroll from './Components/ParallaxScroll';
function App() {
  return (
    <div className="mydiv">
      <Navbar/>
      <LandingPage />
      
        <Card name="Plant1" description="A plartgnkerjg" link_text="CLick "/>
        {/* <Card name="Plant1" description="A plartgnkerjg" link_text="CLick "/> */}
        <ParallaxScroll/>





        <Foot/>
    </div>
  )
}

export default App;