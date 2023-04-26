import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';


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
    </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
