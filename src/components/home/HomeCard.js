import React from "react";
import HomeModal from "./HomeModal";
import "./Home.css";

const HomeCard = () => {
  return (
    <div className="BlogCard">
      <div className="card text-center">
        <div className="overflow">Card Picture</div>
        <div className="card-body text-dark">
          <h4 className="card-title">Card Title</h4>
          <p className="card-text text-secondary">Body</p>
          <HomeModal />
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
