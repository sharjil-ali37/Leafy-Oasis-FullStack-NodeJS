import './ParallaxScroll.css'
import cred from '../resources/cred.png'
import { Outlet, Link } from "react-router-dom";

function ParallaxScroll(){
    return(
        <div id="parallax-world-of-ugg">
  
            <section>
            <div class="title">
                <h3>SERVICES FOR</h3>
                <h1>YOU</h1>
            </div>
            </section>

            <section>
                <div class="parallax-one">
                <h2>PLANT IDENTIFICATION</h2>
                </div>
            </section>

            <section>
            <div class="block">
                <p><span class="first-character sc">P</span>lant identification can be a fun and rewarding experience, but it can also be challenging, especially for beginners. Here are some basic steps to follow when identifying plants:

Observe the plant's physical characteristics: Look at the plant's leaves, stem, flowers, and overall shape. Note the size, color, texture, and any unique features.

Use a plant identification guide or app: There are many resources available to help identify plants, including field guides, plant identification apps, and online databases. These resources can provide information on the plant's common name, scientific name, and other identifying characteristics.

Consider the plant's growing conditions: Take note of where the plant is growing, such as in a sunny or shady location, in a wet or dry soil, or in a particular region. This information can help narrow down the possible plant species.

Seek expert advice: If you are still unsure about the plant's identity, seek advice from a local nursery or a plant expert. They can provide additional information and help you identify the plant.

Remember, plant identification can be challenging, and it's okay if you don't get it right every time. Keep practicing and learning, and enjoy the process of discovering new plants! </p>
                <p class="line-break margin-top-10"></p>
                <p class="margin-top-10">So why go through all these trouble? Let us help you here. Overall, our service is designed to save you time, reduce stress, and provide peace of mind. Whether you're a student, a business owner, or anyone else who needs assistance, we're here to help.
            </p>
            <div class="cent">
                    <Link to="/services"><button class="custom-btn-7 btn-7"><span>Identify</span></button></Link>
                    
                    
                </div>
            </div>
            </section>

            <section>
            <div class="parallax-two">
                <h2>SHOP</h2>
            </div>
            </section>

            <section>
            <div class="block">
                <p><span class="first-character ny">W</span>elcome to our plant shop! We are passionate about plants and are committed to providing our customers with the highest quality products and exceptional service. Our shop offers a wide selection of indoor and outdoor plants, including succulents, tropical plants, and air plants, to name a few. Whether you're a seasoned plant enthusiast or a beginner, we have the perfect plant for you.

At our shop, we believe that plants are more than just decorations - they are living beings that can improve your health and well-being. That's why we only sell plants that are healthy, vibrant, and sustainably grown. We also offer a range of plant care products and accessories to help you keep your plants thriving and looking their best.

Our team is knowledgeable and friendly, and we are always happy to answer any questions you may have about plants or plant care. We take pride in providing personalized recommendations and advice to ensure that you find the perfect plant for your space and lifestyle.

Shopping with us is easy and convenient. Our website is user-friendly and offers a secure checkout process. We also offer shipping and local delivery options to make it easy for you to receive your plants right to your doorstep.

Thank you for choosing our plant shop as your source for all things green. We look forward to helping you add some life and beauty to your space!</p>
                <p class="line-break margin-top-10"></p>
                <p class="margin-top-10"></p>
                <h1 >We will be adding the shop feature soon, stay tuned for updates.</h1>
            </div>
            </section>



            <section>
            <div class="title">
                {/* <h3>JOIN </h3> */}
                <h1>JOIN US</h1>
            </div>
            </section>


            <section>
            <div class="parallax-three">
                <img src={cred}/>

                <h2>Let's get started</h2>
                <p class="heading1">Click on Login or Sign Up button</p>
                <div class="cent">
                    <Link to="/Login"><button class="custom-btn7 btn-7"><span>Login</span></button></Link>
                    <Link to="/Login"><button class="custom-btn7 btn-7"><span>SIGN UP</span></button></Link>
                    
                </div>
            </div>
            
            </section>
  
</div>
    )
}

export default ParallaxScroll;