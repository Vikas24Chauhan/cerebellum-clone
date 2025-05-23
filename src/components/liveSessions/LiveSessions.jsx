import React from "react";
import "./LiveSessions.css";
import sessionImage from "../../assets/images/homeImages/live-session.webp";
import sessionIcon from "../../assets/images/homeImages/session-icon.png";

function LiveSessions() {
  return (
    <div className="sessions-container">
      <div className="sessions-image">
        <div className="sessions-shape-bg">
          <img
            src={sessionImage}
            alt="Live Session"
            className="session-main-img"
          />
        </div>
      </div>

      <div className="sessions-info">
        <img src={sessionIcon} alt="" />
        <h3>Live Sessions</h3>
        <p>- Engage in interactive live sessions that cover all 19 subjects.</p>
        <p>
          - These sessions are created to prepare you for exams like NEET PG,
          INI-CET, and FMGE
        </p>
        <p>
          - Tailor Made schedules and well structured content helps you to
          complete course on time.
        </p>
        <p>
          - High Yielding Sessions like Marathon Series gives an extra edge
          before the exam
        </p>
      </div>
    </div>
  );
}

export default LiveSessions;
