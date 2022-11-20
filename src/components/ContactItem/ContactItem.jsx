import React from "react";
import "./ContactItem.css";

import ContactIcon from "./../ContactIcon/ContactIcon";

function ContactItem(props) {
  return (
    <li>
      <div className='contact_item d-flex'>
        <ContactIcon icon={props.contact} />
        <a
          className='mt-4'
          target='_blank'
          rel='noopener noreferrer'
          href={props.contact.link}
        >
          <p>{props.contact.text}</p>
        </a>
      </div>
    </li>
  );
}

export default ContactItem;
