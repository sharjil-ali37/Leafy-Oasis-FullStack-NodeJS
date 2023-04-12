import './Navbar.css';
import { Outlet, Link } from "react-router-dom";
import logo2 from"../resources/logo2.jpg";


function Navbar(){
    return(
        <>
        <nav id="navbar" class="">
  <div class="nav-wrapper">
    <div class="logo">
      <a href="#home"><img class="web_logo"src={logo2}/></a>
    </div>
    <div class="logo">
      <a href="#home"><i class="fas fa-chess-knight"></i> LEAFY OASIS</a>
    </div>

    
    <ul id="menu">
      <li><Link  to="/">Home</Link></li>
      <li><a href="#services">Services</a></li>
      <li><Link to="/search">Search</Link></li>
      <li><a href="#about">About</a></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><a href="#login">Login</a></li>
      <li><a href="#signup">Sign Up</a></li>

    </ul>
  </div>
</nav>
 

<div class="menuIcon" onClick={ham}>
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>



<Outlet />
</>
    )
}
function ham(){
  return(
    <div class="overlay-menu">
  <ul id="menu">
  <li><Link  to="/">Home</Link></li>
      <li><a href="#services">Services</a></li>
      <li><Link to="/search">Search</Link></li>
      <li><a href="#about">About</a></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
</div>
  )
  
}

export default Navbar;