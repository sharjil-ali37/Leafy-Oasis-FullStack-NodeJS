import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css';
const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="https://via.placeholder.com/400x200" alt="placeholder" />
            </div>
            <div>
                <img src="https://via.placeholder.com/400x200" alt="placeholder" />
            </div>
            <div>
                <img src="https://via.placeholder.com/400x200" alt="placeholder" />
            </div>
            <div>
                <img src="https://via.placeholder.com/400x200" alt="placeholder" />
            </div>
            <div>
                <img src="https://via.placeholder.com/400x200" alt="placeholder" />
            </div>
            <div>
                <img src="https://via.placeholder.com/400x200" alt="placeholder" />
            </div>
        </Slider>
    );

};
export default Carousel;
