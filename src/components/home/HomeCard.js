import React from "react";
import HomeModal from "./HomeModal";
import "./Home.css";

const blog = require("../../resources/home.json");

const HomeCard = () => {
  return (
    <div className="BlogCard">
      {blog.map((entry, key) => {
        return (
          <div className="homecard card text-center">
            <div className="cardImage">
              <img src={entry.img} alt="" />
            </div>
            <div className="card-body text-dark">
              <h4 className="card-title">{entry.title}</h4>
              <p className="card-text text-secondary">
                Click below to find out more!
              </p>
              <HomeModal
                title={entry.title}
                pic={entry.title}
                body={entry.body}
                key={key}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default HomeCard;
