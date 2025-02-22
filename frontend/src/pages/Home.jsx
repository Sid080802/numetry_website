import React from "react";
import "../styles/Home.css";
import MeetTheTeam from "./MeetTheTeam"; // Import the MeetTheTeam component
import Cards from './Cards'
import Stats from "./Stats";
import IndustryCharts from './IndustryChart';
const Home = () => {
  const scrollToTeam = () => {
    const teamSection = document.getElementById("meet-the-team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="home-container">
        <video className="background-video" src="/assets/home.mp4" autoPlay loop muted></video>
        <div className="content">
          <button className="btn btn-outline-primary" onClick={scrollToTeam}>
            Explore
          </button>
          <div className="arrow-down">&#x2193;</div>
        </div>
      </div>

      <div id="stats" className="mt-12">
        <Stats />
      </div>
      <div id="cards" className="mt-12">
        <Cards />
      </div>

      {/* Meet the Team Section */}
      <div id="meet-the-team" className="mt-12">
        <MeetTheTeam />
      </div>
      <div id="IndustryChart" className="mt-12">
        <IndustryCharts />
      </div>
     
    </div>
  );
};

export default Home;
