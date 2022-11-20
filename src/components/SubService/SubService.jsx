import React from "react";
import "./SubService.css";

function SubService(props) {
  return (
    <div
      className='sub_service d-flex justify-content-center align-items-center p-5'
      style={{
        transition: 0.5 + "s",
        left: 100 - props.left - 20 + "%",
        top: props.top + 40 + "%",
      }}
    >
      <p>{props.subService}</p>
    </div>
  );
}

export default SubService;
