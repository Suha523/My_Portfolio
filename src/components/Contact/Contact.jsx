import React from "react";
import "./Contact.css";
import ContactItem from "./../ContactItem/ContactItem";
import { Col, Row } from "reactstrap";

function Contact() {
  const contacts = [
    {
      name: "radix-icons:linkedin-logo",
      color: "#4b2121",
      text: "Suha Shehadeh Linkedin",
      link: "https://www.linkedin.com/in/suha-shehadeh-02a9471a5/",
    },
    {
      name: "ic:baseline-whatsapp",
      color: "#4b2121",
      text: "+972 595521651",
      link: "http://wa.me/+972595521651",
    },
    {
      name: "ic:round-email",
      color: "#4b2121",
      text: "suhashehade@gmail.com",
      link: "mailto:suhashehade@gmail.com",
    },
    {
      name: "mdi:twitter",
      color: "#4b2121",
      text: "Suha Shehadeh Twitter",
      link: "https://twitter.com/suhashehade",
    }
  ];
  return (
    <div className='contact p-5' id="contact">
      <h2 className='text-center text-light-pink mb-5'>Contact Me</h2>
      <div className='container'>
        <Row>
          <Col md={6}>
            <div className='map'>
              <iframe
                title='Urif Position'
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13510.751698151507!2d35.23293177859471!3d32.158719364276415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151cdf6513c44989%3A0xfa751e7cbebfbe81!2z2LnZiNix2YrZgQ!5e0!3m2!1sar!2s!4v1668952136679!5m2!1sar!2s'
                width='100%'
                height='100%'
                style={{ border: 0 }}
                loading='lazy'
              ></iframe>
            </div>
          </Col>
          <Col md={6}>
            <div className='contact_info p-4'>
              <h3 className="text-light-pink">I'm connected on:</h3>
              <ul className='list-unstyled mt-5'>
                {contacts.map((c, key) => (
                  <ContactItem key={key} contact={c} />
                ))}
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Contact;
