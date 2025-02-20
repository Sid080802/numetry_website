import React from "react";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <video className="background-video" src="/assets/home.mp4" autoPlay loop muted></video>
      <div className="content">
        <button className="btn btn-outline-primary">Explore</button>
      </div>
    </div>
  );
};

export default Home;
