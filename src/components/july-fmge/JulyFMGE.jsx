import React, { useEffect, useRef } from "react";
import "./JulyFMGE.css";
import image1 from "../../assets/images/julyFMGE/top1.webp";
import image2 from "../../assets/images/julyFMGE/top2.webp";
import image3 from "../../assets/images/julyFMGE/top3.webp";
import image4 from "../../assets/images/julyFMGE/top4.webp";
import image5 from "../../assets/images/julyFMGE/top5.webp";
import image6 from "../../assets/images/julyFMGE/top6.webp";
import image7 from "../../assets/images/julyFMGE/top7.webp";
import image8 from "../../assets/images/julyFMGE/top8.webp";
import image9 from "../../assets/images/julyFMGE/top9.webp";
import image10 from "../../assets/images/julyFMGE/top10.webp";
import waveImage from "../../assets/images/homeImages/wave.png";

function JulyFMGE() {
  const julyfmgeListRef = useRef(null);

  const julyfmgeData = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];

  useEffect(() => {
    let scrollInterval;
    let isPaused = false;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (julyfmgeListRef.current && !isPaused) {
          const { scrollLeft, scrollWidth, clientWidth } =
            julyfmgeListRef.current;

          julyfmgeListRef.current.scrollLeft += 1;

          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            julyfmgeListRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    };

    // Start scrolling with pause interval
    const controlScroll = () => {
      startScroll();

      const pauseAndResume = setInterval(() => {
        isPaused = true;

        // Pause for 2 seconds
        setTimeout(() => {
          isPaused = false;
        }, 2000);
      }, 5000); // Every 4 seconds, pause for 2

      return pauseAndResume;
    };

    const pauseController = controlScroll();

    return () => {
      clearInterval(scrollInterval);
      clearInterval(pauseController);
    };
  }, []);

  return (
    <div className="july-fmge-container">
      <div className="july-fmge-wave">
        <img src={waveImage} alt="" />
      </div>

      <h1>Top scorers in FMGE July 2024</h1>
      <div className="july-fmge-cards" ref={julyfmgeListRef}>
        {julyfmgeData.map((data, index) => (
          <div key={index} className="july-fmge-card">
            <img src={data} alt={`july-fmge student ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default JulyFMGE;
