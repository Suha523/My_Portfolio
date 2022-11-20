import React from "react";
import { Icon } from "@iconify/react";
import "./ContactIcon.css";

function ContactIcon(props) {
  return (
    <div className='contact_icon d-flex justify-content-center align-items-center'>
      <Icon
        icon={props.icon.name}
        color={props.icon.color}
        fontSize={props.icon.size}
      />
    </div>
  );
}

export default ContactIcon;
