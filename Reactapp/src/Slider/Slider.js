import './Slider.css'
import React from "react";
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <Carousel >
    <Carousel.Item>
      <img
        className="image"
        src='https://www.bigbasket.com/media/uploads/banner_images/2002256_fresho-meat-weo_460_Mumbai.jpg'
        alt="Third slide"

      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="image"
        src="https://www.bigbasket.com/media/uploads/banner_images/2001006_home-kitchen-ss_t1_460.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="image"
        src="https://www.bigbasket.com/media/uploads/banner_images/2002084_fresh-oranges_t1_460.jpg"
        alt="Third slide"
      />
    </Carousel.Item>
  </Carousel>
  );
}



export default Slider;