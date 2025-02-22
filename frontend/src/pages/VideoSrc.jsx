import React from "react";
import "../styles/video.css"; // Ensure correct path

const VideoSrc = () => {
  const scrollToTeam = () => {
    const teamSection = document.getElementById("meet-the-team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <video className="background-video" src="/assets/home.mp4" autoPlay loop muted></video>
      <div className="content">
        <button className="btn btn-outline-primary" onClick={scrollToTeam}>
          Explore
        </button>
        <div className="arrow-down">&#x2193;</div>
      </div>
    </div>
  );
};

export default VideoSrc;
