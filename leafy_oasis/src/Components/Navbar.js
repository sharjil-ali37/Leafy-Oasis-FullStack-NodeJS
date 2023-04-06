import './Navbar.css';

function Navbar(){
    return(
        <>
        <nav id="navbar" class="">
  <div class="nav-wrapper">
    

    <div class="logo">
      
      <a href="#home"><i class="fas fa-chess-knight"></i> LEAFY OASIS</a>
    </div>

    
    <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#login">Login</a></li>
      <li><a href="#signup">Sign Up</a></li>

    </ul>
  </div>
</nav>


<div class="menuIcon">
  <span class="icon icon-bars"></span>
  <span class="icon icon-bars overlay"></span>
</div>


<div class="overlay-menu">
  <ul id="menu">
      <li><a href="#home">Home</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
</div></>
    )
}

export default Navbar;