
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import logo2 from "../resources/logo2.jpg" 

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Foot(){
    return(

        <div class="border-top pt-4  pt-md-5 bg footer">
        <div class="row">
                  <div class="col-md mar">
                            <img class="mb-2 footer_logo"    src={logo2} alt="logo"/>
                            <small class="d-block text-muted">REDEFINIG YOUR NATURE</small>
                            
                  </div>

                  <div class="col-md">
                            <h5>Features</h5>
                            <ul class="list-unstyled">
                                      <li><a href="#" class="text-muted">Cool Stuff</a></li>
                                      <li><a href="#" class="text-muted">Random Features</a></li>
                                      <li><a href="#" class="text-muted">Team Features</a></li>
                                      <li><a href="#" class="text-muted">Stuff For Developers</a></li>
                                      
                            </ul>
                  </div>

                  <div class="col-md">
                            <h5>Resources</h5>
                            <ul class="list-unstyled">
                                      <li><a href="#" class="text-muted">Resource</a></li>
                                      <li><a href="#" class="text-muted">Resourse Name</a></li>
                                      <li><a href="#" class="text-muted">Another Resourse</a></li>
                                      <li><a href="#" class="text-muted">Final Resourse</a></li>
                                      
                            </ul>
                  </div>

                  <div class="col-md">
                            <h5>About</h5>
                            <ul class="list-unstyled">
                                      <li><a href="#" class="text-muted">Team</a></li>
                                      <li><a href="#" class="text-muted">Locations</a></li>
                                      <li><a href="#" class="text-muted">Privacy</a></li>
                                      <li><a href="#" class="text-muted">Terms</a></li>

                            </ul>
                  </div>
                  
          </div>
        
          <div class="row social-icons" >
            <div class="col">
              <button class=" btnBg btn "> <i class="fa fa-github"></i> </button>
              
            </div>
            <div class="col">
              <button class="btn">
              <i class="fa fa-linkedin"></i>
            </button>
            </div>
            <div class="col">
              <button class="btn">
              <i class="fa fa-twitter"></i>
            </button>
            </div>
            <div class="col">
              <button class="btn">
              <i class="fa fa-facebook"></i>
            </button>
            </div>
            <div class="col">
              <button class="btn">
              <i class="fa fa-instagram"></i>
            </button>
            </div>
          </div>

          <hr/>
          
          <br/>
        <div/>

        
        </div>

    )
}

export default Foot;