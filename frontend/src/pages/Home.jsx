import React from "react";
import MeetTheTeam from "./MeetTheTeam";
import Cards from './Cards';
import Stats from "./Stats";
import IndustryCharts from './IndustryChart';
import VideoSrc from './VideoSrc';

const Home = () => {
  return (
    <div className="home"> {/* Wrap everything inside a container */}
      <div id="video">
        <VideoSrc/>
      </div> 
      <div id="stats">
        <Stats />
      </div>
      <div id="cards">
        <Cards />
      </div>
      <div id="meet-the-team">
        <MeetTheTeam />
      </div>
      <div id="IndustryChart">
        <IndustryCharts />
      </div> 
    </div>
  );
};

export default Home;
