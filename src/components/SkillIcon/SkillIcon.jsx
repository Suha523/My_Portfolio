import React from "react";
import { Icon } from "@iconify/react";
import "./SkillIcon.css";

function SkillIcon(props) {
  return (
    <div className='bubbel d-flex justify-content-center align-items-center'>
      <Icon
        icon={props.icon.name}
        fontSize={props.icon.size}
        color={props.icon.color}
      />
    </div>
  );
}

export default SkillIcon;
