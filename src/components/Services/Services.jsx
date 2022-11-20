import React from "react";
import Service from "../Service/Service";
import "./Services.css";

function Services() {
  const services = [
    {
      name: "Websites",
      sub_services: ["Portfolios", "Landing Pages", "Blogs"],
    },
    {
      name: "Web Applications",
      sub_services: ["Simple Games", "Notes Apps", "Chat Apps", "Other Apps"],
    },
  ];
  return (
    <div className='services p-5' id="services">
      <h2>What I do?</h2>
      <div className='w-100 h-100'>
        <div className='d-flex justify-content-between flex-wrap w-100 h-100'>
          {services.map((s, key) => (
            <Service key={key} service={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
