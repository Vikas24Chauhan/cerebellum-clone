import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import Banner from "../../components/banners/Banner";
import Batch from "../../components/batch/Batch";
import waveImage from "../../assets/images/homeImages/wave.png";
import TopperFMGE from "../../components/fmge-topper/TopperFMGE";
import Faculties from "../../components/faculties/Faculties";
import LiveSessions from "../../components/liveSessions/LiveSessions";
import MockTest from "../../components/mokeTest/MockTest";
import Lectures from "../../components/recordedLectures/Lectures";
import Qbank from "../../components/qBank/Qbank";
import Notes from "../../components/notes/Notes";
import BTR from "../../components/btr/BTR";
import NEET from "../../components/neet/NEET";
import CET from "../../components/ini-cet/CET";
import JulyFMGE from "../../components/july-fmge/JulyFMGE";
import GetStart from "../../components/getStart/GetStart";

function Home() {
  return (
    <div>
      <Banner />

      <div className="home-header">
        <h1>
          Join The Biggest <span>Online Live Programs</span> that have helped
          many <span>PG Aspirants</span>
          achieve <span>BETTER Ranks</span>
        </h1>

        <NavLink>Take the first step</NavLink>

        <h2>Conceptual. Comprehensive. Structured. Complete</h2>
      </div>

      <Batch />

      <div className="home-wave">
        <img src={waveImage} alt="wave image" />
      </div>

      <TopperFMGE />

      <Faculties />

      <LiveSessions />

      <MockTest />

      <Lectures />

      <Qbank />

      <Notes />

      <BTR />

      <NEET />

      <CET />

      <JulyFMGE />

      <GetStart />
    </div>
  );
}

export default Home;
