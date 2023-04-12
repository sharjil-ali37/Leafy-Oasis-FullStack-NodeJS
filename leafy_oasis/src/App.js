import './App.css';
import Foot from './Components/Footer';

import KommunicateChat from './Components/Chatbot';


import ParallaxScroll from './Components/ParallaxScroll';

function App() {
  return (
    <div className="mydiv">
     
      <ParallaxScroll />

      {/* <div><KommunicateChat /></div> */}

      <Foot />
    </div>
  )
}

export default App;
