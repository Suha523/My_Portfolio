import React, { useState } from "react";
import SubService from "../SubService/SubService";
import "./Service.css";

function Service(props) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleMouseEnter = () => {
    setIsClicked(true);
  }

  const handleMouseOut = () => {
    setIsClicked(false);
  }
  
  return (
    <div className={isClicked ? "service_container" : "service_container h-25"}>
      <div
        onClickCapture={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseOut}
        className={
          isClicked
            ? "service d-flex justify-content-center align-items-center clicked"
            : "service d-flex justify-content-center align-items-center"
        }
      >
        <p>{props.service.name}</p>
      </div>
      {props.service.sub_services.map((ss, key) => (
        <SubService
          subService={ss}
          key={key}
          left={isClicked ? Math.exp(key) : 60}
          top={
            isClicked
              ? ((key - 1) / props.service.sub_services.length) * 100
              : 40
          }
        />
      ))}
    </div>
  );
}

export default Service;
