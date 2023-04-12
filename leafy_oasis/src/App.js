import './App.css';
import Foot from './Components/Footer';

import KommunicateChat from './Components/Chatbot';


import ParallaxScroll from './Components/ParallaxScroll';

import Search from './Pages/Search';
import Login from './Pages/Login';

function App() {
  return (
    <div className="mydiv">
     
      <ParallaxScroll />


      {/* <div><KommunicateChat /></div> */}


      <div><KommunicateChat /></div>
    {/* <Login/> */}

      <Foot />
    </div>
  )
}

export default App;
