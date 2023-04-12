import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Foot from './Components/Footer';
import Card from './Components/Card';
import LandingPage
  from './Pages/LandingPage';
import KommunicateChat from './Components/Chatbot';


import ParallaxScroll from './Components/ParallaxScroll';

import Search from './Pages/Search';
import Login from './Pages/Login';
function App() {
  return (
    <div className="mydiv">
      {/* <Navbar/> */}
      {/* <LandingPage /> */}
      {/* <Search /> */}

      / {/* <Card name="Plant1" description="A plartgnkerjg" link_text="CLick "/> */}
      {/* <Card name="Plant1" description="A plartgnkerjg" link_text="CLick "/> */}
      <ParallaxScroll />

      <div><KommunicateChat /></div>
    {/* <Login/> */}
      <Foot />
    </div>
  )
}

export default App;
