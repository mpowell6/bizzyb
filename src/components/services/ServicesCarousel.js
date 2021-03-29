import React from "react";
import { Carousel } from "react-bootstrap";

class ServicesCarousel extends React.Component {
  setCarousel() {}

  render() {
    return (
      <div className="carousel col-6">
        <Carousel>
          {this.props.imgSources.map((item) => {
            return (
              <Carousel.Item interval={10000}>
                <img src={item.img} />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    );
  }
}

export default ServicesCarousel;
