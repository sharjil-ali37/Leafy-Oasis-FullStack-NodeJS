import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './Contact.css';
const Contact =()=> {
  
    return(
      
      <Container>
        <Row className="nb-5 mt-3">
          <Col lg='8'>
            <h1 className="display-4 mb-4">
              Contact Us
            </h1>
          </Col>
        </Row>

        
        <Row className="sec_sp">
          <Col lg='5' className="mb-5">
            <h3 className="color_sec py-4">Get in touch </h3>
            <address>
              <strong>Email:anshika@gmail.com</strong>
              <br />
              <br />
              <p>
                <strong>Phone:+91 7906525648</strong>
              </p>
            </address>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem enim eius consequuntur eaque veritatis vel totam voluptatum, impedit, minima debitis harum. Quam nihil suscipit repellendus sed? Debitis veritatis eligendi autem.</p>
          </Col>
          <Col lg='7' className="d-flex align-items-center">
            <form className="contact__form w-100" action="https://formsubmit.co/5e76cbf99489ecd8374187e5bc54802b " method="POST">
              <Row>
                <Col lg='6' className="form-group">
                  <input  
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  />
                  </Col>
                <Col lg='6' className="form-group">
                  <input  
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  />
                  </Col>
              </Row>
              <textarea 
                       className="form-control rounded-0" id="message"
                        name="message"
                        placeholder="Message"
                         row='5'
              ></textarea>
              <br />
              <Row>
                <Col lg='12' className="form-group">
              
                 <button className="btn ac_btn" type="submit">Send</button>  
                </Col>
                </Row>
              </form>
          </Col>
        </Row>
      </Container>
        
            
            
        
    );
};
export default Contact;
