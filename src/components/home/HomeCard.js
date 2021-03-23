import React from "react";
import HomeModal from "./HomeModal";
import "./Home.css";

const blog = require('../../resources/home.json');

const HomeCard = () => {
  return (
    <div className="BlogCard">
      {
        console.log(blog)
      }
      <div className="card text-center">
        <div className="overflow">Card Picture</div>
        <div className="card-body text-dark">
          <h4 className="card-title">{blog[0].title}</h4>
          <p className="card-text text-secondary">{blog[0].body}</p>
          <HomeModal title={blog[0].title} pic={blog[0].title} body={blog[0].body}/>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
