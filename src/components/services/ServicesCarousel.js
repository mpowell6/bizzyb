import React from "react";
import { Carousel } from "react-bootstrap";

class ServicesCarousel extends React.Component {
  setCarousel() {}

  render() {
    return (
        <Carousel>
          {this.props.imgSources.map((item) => {
            return (
              <Carousel.Item interval={5000}>
                <img src={item.img} alt={item.alt} />
              </Carousel.Item>
            );
          })}
        </Carousel>
    );
  }
}

export default ServicesCarousel;
