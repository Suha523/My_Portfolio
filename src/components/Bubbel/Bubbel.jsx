import React from "react";
import "./Bubbel.css";

function Bubbel(props) {
  return (
    <div className={"bubbel" + props.bubbel}>
      <div className='d-flex justify-content-center'>
        <p className='text-white paragraph'>{props.text}</p>
      </div>
    </div>
  );
}

export default Bubbel;
