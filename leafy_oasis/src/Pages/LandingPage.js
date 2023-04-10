import './LandingPage.css';
import lavender_video from '../resources/lavender_video.mp4';
import Container from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import caption1 from '../resources/Captions1.jpg';
import plants1 from '../resources/plants1.jpg';
import plants2 from '../resources/plants2.jpg';
import plants3 from '../resources/plants3.jpg';
import plants4 from '../resources/plants4.jpg';
import ParallaxScroll from '../Components/ParallaxScroll';



function LandingPage(){
    return(
        <>
        <header>
            <div class="overlay">
        
          </div>
          
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"  src={lavender_video}>
          </video>
        
          
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white">
                <h1 class="display-4" style={{fontWeight:500, fontSize: 80}} >NURTURE YOUR</h1>
                <h1 class="display-4" style={{fontWeight:700, fontSize: 100}} >PLANTS BETTER</h1>
                <p class="lead mb-0">LEAFY OASIS</p>
              </div>
            </div>
          </div>
        </header>
        
        
        
        
        <h1 class="display-4" style={{fontWeight:500, fontSize: 60}} >DISCOVER OUR PLANTS</h1>
        {/* INDOOR PLANTS */}
        <img class="bgfixed" src={plants4}></img>
          <div class="plants_outline"> 
          
          <div class="top_bar_overlay col-md-5">
            <img src={caption1}></img>
          </div>
              <div class="row">
                  <div class=" col-md-5">
                      <div class="row">
                          <div class="body_content ">
                            <img src={plants2}></img>
                          </div>
                          <div class="body_content">
                            {/* <img src={plants2}></img> */}
                          </div>
                          
                      </div>
                  </div>
                  <div class="top_bar col-md-7"> 
                    <img src={plants2}></img>
                  </div>  
                      
              </div>
              <div class="row">
                  <div class=" col-md-5">
                    <div class ="row">
                        <div class="threeXthree col-md-4">
                          Our Top Picks
                        </div>
                        <div class="threeXthree col-md-4">
                        <img src={plants2}></img>
                        </div>
                        <div class="threeXthree col-md-4">
                        <img src={plants2}></img>
                        </div>
                    </div>
                    <div class ="row">
                        <div class="threeXthree col-md-4">
                        <img src={plants2}></img>
                        </div>
                        <div class="threeXthree col-md-4">
                        <img src={plants2}></img>
                        </div>
                        <div class="threeXthree col-md-4">
                        <img src={plants2}></img>
                        </div>
                    </div>
                    <div class ="row">
                        <div class="threeXthree col-md-4">
                          <img src={plants2}></img>
                        </div>
                        <div class="threeXthree col-md-4">
                          <img src={plants2}></img>
                        </div>
                        <div class="threeXthree col-md-4">
                          <img src={plants2}></img>
                        </div>
                    </div>
                  </div>
                  <div class="top_bar col-md-7">
                  <img src={plants3}></img></div>  
                      
              </div>

              
              </div>    
            <ParallaxScroll/>
        </>



    )
}

export default LandingPage;