import React, { useEffect, useRef } from "react";
import "./NEET.css";
import image1 from "../../assets/images/neet/neet1.png";
import image2 from "../../assets/images/neet/neet2.webp";
import image3 from "../../assets/images/neet/neet3.png";
import image4 from "../../assets/images/neet/neet4.png";
import image5 from "../../assets/images/neet/neet5.png";
import image6 from "../../assets/images/neet/neet6.png";
import image7 from "../../assets/images/neet/neet7.png";
import image8 from "../../assets/images/neet/neet8.png";
import image9 from "../../assets/images/neet/neet9.png";
import image10 from "../../assets/images/neet/neet10.png";
import image11 from "../../assets/images/neet/neet11.png";
import image12 from "../../assets/images/neet/neet12.png";
import image13 from "../../assets/images/neet/neet13.png";
import image14 from "../../assets/images/neet/neet14.png";
import waveImage from "../../assets/images/homeImages/wave.png";

function NEET() {
  const neetListRef = useRef(null);

  const neetData = [
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
    image11,
    image12,
    image13,
    image14,
  ];

  useEffect(() => {
    let scrollInterval;
    let isPaused = false;

    const startScroll = () => {
      scrollInterval = setInterval(() => {
        if (neetListRef.current && !isPaused) {
          const { scrollLeft, scrollWidth, clientWidth } = neetListRef.current;

          neetListRef.current.scrollLeft += 1;

          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            neetListRef.current.scrollLeft = 0;
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
      }, 4000); // Every 4 seconds, pause for 2

      return pauseAndResume;
    };

    const pauseController = controlScroll();

    return () => {
      clearInterval(scrollInterval);
      clearInterval(pauseController);
    };
  }, []);

  return (
    <div className="neet-container">
      <div className="neet-header">
        <h1>
          ✨ From Dreams to Reality ✨ Check Out Our FMGE Success Stories!
        </h1>
      </div>
      <div className="neet-cards" ref={neetListRef}>
        {neetData.map((data, index) => (
          <div key={index} className="neet-card">
            <img src={data} alt={`NEET student ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className="neet-wave">
        <img src={waveImage} alt="" />
      </div>
    </div>
  );
}

export default NEET;
