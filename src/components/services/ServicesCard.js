import React from "react";
import ServiceModal from "./ServiceModal";
import img1 from "./headerImg.jpg";
import plumbing from "../../resources/images/services/plumbing.jpg";
import electric from "../../resources/images/services/electric.jpg";
import home from "../../resources/images/services/home.jpg";

class ServiceCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: ''
    }

    this.img = this.img.bind(this);
  }

  img(title) {
    console.log(title);
    console.log(this.props);
    switch (title) {
      case "Plumbing":
        return <img src={plumbing} alt="Plumbing" />;
      case "Electric":
        return <img src={electric} alt="Electric" />;
      case "Home Improvement":
        return <img src={home} alt="Home Improvement" />;
      default:
        return <img src={img1} alt="Log" />;
    }
  }

  render() {
    return (
      <div className="card text-center">
        <div className="overflow">
          {this.img(this.props.title)}
        </div>
        <div className="card-body text-dark">
          <h4 className="card-title">{this.props.title}</h4>
          <p className="card-text text-secondary">{this.props.body}</p>
          <ServiceModal title={this.props.title} body={this.props.card} />
        </div>
      </div>
    );
  }
}

export default ServiceCard;
