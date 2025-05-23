import React, { useEffect, useRef } from "react";
import "./Faculties.css";
import facultiesData from "../../assets/data/facultiesData";

function Faculties() {
  const facultiesListRef = useRef(null);

  useEffect(() => {
    let scrollInterval;

    // Function to apply auto-scroll effect
    const applyScrollEffect = () => {
      scrollInterval = setInterval(() => {
        if (facultiesListRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } =
            facultiesListRef.current;

          // Scroll the container horizontally
          facultiesListRef.current.scrollLeft += 1;

          // Check if the scroll has reached the end
          if (scrollLeft + clientWidth >= scrollWidth - 1) {
            // Reset to the beginning
            facultiesListRef.current.scrollLeft = 0;
          }
        }
      }, 20);
    };

    // Start the scroll effect
    applyScrollEffect();

    // Cleanup the interval on component unmount
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className="faculties-container">
      <h1>Cerebellum Legendary Faculties</h1>
      <div className="faculties-cards" ref={facultiesListRef}>
        {facultiesData.map((data, index) => (
          <div key={index} className="faculties-card">
            <img src={data.image} alt="" />
            <h3>{data.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculties;
