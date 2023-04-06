import './LandingPage.css';
import lavender_video from '../resources/lavender_video.mp4';

function LandingPage(){
    return(
        <div>
            <div class="overlay">
        
          </div>
          
          <video playsinline="playsinline" autoplay="autoplay" muted="muted" loop="loop"  src={lavender_video}>
          </video>
        
          
          <div class="container h-100">
            <div class="d-flex h-100 text-center align-items-center">
              <div class="w-100 text-white">
                <h1 class="display-4" style={{font_weight:800, font_size: 80}} >DESIGN YOUR</h1>
                <h1 class="display-4" style={{font_weight:800, font_size: 100}} >DREAM HOME</h1>
                <p class="lead mb-0">ABC DESIGNERS</p>
              </div>
            </div>
          </div>
        </div>
    )
}

export default LandingPage;