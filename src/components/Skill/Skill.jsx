import React from "react";
import Point from "./../Point/Point";
import "./Skill.css";
function Skill(props) {
  return (
    <div className='skill'>
      <Point /> {props.skill.name}:{" "}
      <span className='badge bg-light-pink'>{props.skill.percent}%</span>
    </div>
  );
}

export default Skill;
