import React from "react";
import "../styles/Home.css";
import MeetTheTeam from "./MeetTheTeam"; // Import the MeetTheTeam component
import Cards from './Cards'
import Stats from "./Stats";
import IndustryCharts from './IndustryChart';
import VideoSrc from './VideoSrc';
const Home = () => {
  const scrollToTeam = () => {
    const teamSection = document.getElementById("meet-the-team");
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
     
     <div id="video" className="mt-12">
        <VideoSrc/>
      </div>
    
      <div id="stats" className="mt-12">
        <Stats />
      </div>
      <div id="cards" className="mt-12">
        <Cards />
      </div>

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
