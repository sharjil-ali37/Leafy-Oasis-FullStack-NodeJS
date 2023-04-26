import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
import cl1 from '../resources/a.jpg';
import cl2 from '../resources/b.jpg';
import cl3 from '../resources/c.jpg';
import cl4 from '../resources/d.jpg';
import cl5 from '../resources/e.jpg';
import cl6 from '../resources/f.jpg';
import cl7 from '../resources/g.jpg';
import cl8 from '../resources/h.jpg';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear"
    };

    return (
        <Slider {...settings}>
            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl1} alt="sq-sample10" />
                    <div class="author">
                        <h5>Pelican Steve <span>- LittleSnippets</span></h5>
                    </div>
                </figure>

            </div>




            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl2} alt="sq-sample10" />
                    <div class="author">
                        <h5>Pelican Steve <span>- LittleSnippets</span></h5>
                    </div>
                </figure>

            </div>



            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl3}alt="sq-sample10" />
                    <div class="author">
                        <h5>Pelican Steve <span>- LittleSnippets</span></h5>
                    </div>
                </figure>

            </div>




            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                <img src={cl4} alt="sq-sample10" />
                    <div class="author">
                        <h5>Pelican Steve <span>- LittleSnippets</span></h5>
                    </div>
                </figure>

            </div>





            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl5} alt="sq-sample10" />
                    <div class="author">
                        <h5>Pelican Steve <span>- LittleSnippets</span></h5>
                    </div>
                </figure>

            </div>




            <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl6} alt="sq-sample10" />
                    <div class="author">
                        <h5>Pelican Steve <span>- LittleSnippets</span></h5>
                    </div>
                </figure>

          </div>


          <div>

                <figure class="snip1197">
                    <figcaption>
                        <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</blockquote>
                        <div class="arrow"></div>
                    </figcaption>
                    <img src={cl7} alt="sq-sample10" />
                    <div class="author">
                        <h5>Pelican Steve <span>- LittleSnippets</span></h5>
                    </div>
                </figure>

                </div>




            <div>

            <figure class="snip1197">
                <figcaption>
                    <blockquote>Sometimes I think the surest sign that intelligent life exists elsewhere in the universe is that none of it has tried to contact us.</blockquote>
                    <div class="arrow"></div>
                </figcaption>
                <img src={cl8} alt="sq-sample10" />
                <div class="author">
                    <h5>Pelican Steve <span>- LittleSnippets</span></h5>
                </div>
            </figure>

            </div>




        </Slider>
    );

};
export default Carousel;
