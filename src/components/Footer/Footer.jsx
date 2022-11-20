import React from "react";
import "./Footer.css";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <div className='footer p-4'>
      <p className="text-center text-light-pink">
        Made with <Icon icon='mdi:cards-heart' /> from Suha
        Shehadeh. &copy;Copyright 2022. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;
