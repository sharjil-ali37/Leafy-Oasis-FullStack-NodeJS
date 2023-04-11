import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from './Pages/Search';
import Navbar from './Components/Navbar';
import LandingPage from './Pages/LandingPage';
import Foot from './Components/Footer';
import Contact from './Pages/Contact';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Search/> */}
  
    {/* <LandingPage/> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {/* <Route path="/home" element={<App />}/> */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/search" element={<Search />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="*" element={<NoPage />} /> */}
          
        </Route>
      </Routes>
    </BrowserRouter>
    <Foot/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
