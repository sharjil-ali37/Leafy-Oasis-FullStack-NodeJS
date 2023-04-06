
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'

function Foot(){
    return(

        <div class="border-top pt-4  pt-md-5 bg footer">
        <div class="row">
                  <div class="col-md" style={{margin_left: 3}}>
                            <img class="mb-2"    src="img_logo.png" alt="logo" height="50" width="50"/>
                            <small class="d-block text-muted">Rejuvenating Your Home</small>

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
          {/* <hr style="border: 10px solid white; border-radius: 5px; width: 80%; margin: auto;"/> */}
          <br/>
          <div class="row" style={{text_align: "center", width: 25, }}>
            <div class="col-md">
              <button class="btn"> <i class="bi bi-github"></i> </button>
              
            </div>
            <div class="col-md">
              <button class="btn">
              <i class="bi bi-linkedin"></i>
            </button>
            </div>
            <div class="col-md">
              <button class="btn">
              <i class="bi bi-twitter"></i>
            </button>
            </div>
            <div class="col-md">
              <button class="btn">
              <i class="bi bi-facebook"></i>
            </button>
            </div>
            <div class="col-md">
              <button class="btn">
              <i class="bi bi-instagram"></i>
            </button>
            </div>
          </div>

          {/* <hr style=" width: 50%; margin: auto;"/> */}
          
          <br/>
        <div/>

        
        </div>

    )
}

export default Foot;