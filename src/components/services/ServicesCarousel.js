import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../resources/images/services/decksBuilt.jpg";
import img2 from "../../resources/images/services/finishedShower.jpg";
import img3 from "../../resources/images/services/gasLogs.jpg";
import img4 from "../../resources/images/services/bathroomExposed.jpg";
import img5 from "../../resources/images/services/home.jpg";
import img6 from "../../resources/images/services/inlineWaterFilter.jpg";
import img7 from "../../resources/images/services/plumbingCutOff.jpg";
import img8 from "../../resources/images/services/sumpPump.jpg";
import img9 from "../../resources/images/services/vanityInstall.jpg";

const ServicesCarousel = () => {
  return (
    <div className="carousel col-6">
      <Carousel>
        <Carousel.Item interval={10000}>
          <img src={img1} alt="Carousel Image1" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src={img2} alt="Carousel Image2" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src={img3} alt="Carousel Image3" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src={img4} alt="Carousel Image4" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src={img5} alt="Carousel Image5" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src={img6} alt="Carousel Image6" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src={img7} alt="Carousel Image7" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src={img8} alt="Carousel Image8" />
        </Carousel.Item>
        <Carousel.Item interval={10000}>
          <img src={img9} alt="Carousel Image9" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ServicesCarousel;
