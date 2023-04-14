import './LandingPage.css';
import lavender_video from '../resources/lavender_video.mp4';
import 'bootstrap/dist/css/bootstrap.min.css';
import ParallaxScroll from '../Components/ParallaxScroll';


function LandingPage(){
    return(
        <>
          <header> 
            <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"  src={lavender_video}>
            </video>

            <div class="container h-100">
              <div class="d-flex h-100 text-center align-items-center">
                <div class="w-100 text-white cen">
                  <h1 class="display-4" style={{fontWeight:500, fontSize: 80}} >NURTURE YOUR</h1>
                  <h1 class="display-4" style={{fontWeight:700, fontSize: 100}} >NATURE BETTER</h1>
                  <p class="lead mb-0">LEAFY OASIS</p>
                </div>
              </div>
            </div>
          </header>     
          <ParallaxScroll/>
          
        </>
    )
}

export default LandingPage;