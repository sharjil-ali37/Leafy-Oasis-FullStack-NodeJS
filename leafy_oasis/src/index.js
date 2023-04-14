import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Search from './Pages/Search';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Foot from './Components/Footer';
import Contact from './Pages/Contact';

import About from './Pages/About';
import App from './App';

import Login from './Pages/Login';


(function (d, m) {
  var kommunicateSettings = { "appId": "18c2ec3c69229e81cdc33650604d6157a", "popupWidget": true, "automaticChatOpenOnNavigation": true };
  var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
  window.kommunicate = m; m._globals = kommunicateSettings;
})(document, window.kommunicate || {});

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    
    <App/>
    {/* <HashRouter>
      <Routes>
        <Route path="/" element={<Navbar />}> 
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/about" element={<About />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          

          {/* <Route path="/Login" element={<Login />} />
        </Route>
      </Routes>
    </HashRouter> */}

    {/* <Foot /> */} 

  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
