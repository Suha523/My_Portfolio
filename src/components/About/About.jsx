import React from "react";
import { Col, Row } from "reactstrap";
import Bubble from "../Bubbel/Bubbel";
import "./About.css";

function About() {
  const bubbles = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div className='about p-5'>
      <div className='container'>
        <h2 className='text-center'>Who is me?</h2>
        <Row>
          <Col md={6}>
            <div className='text mt-5'>
              <Bubble key={6} bubbel={6} text={"I"} />
              <div className='paragragphs pt-5'>
                <p className='mt-5'>
                  Graduated from Palestine Technical University - Khadoori in
                  2021, with a Bachelor's degree in Computer Systems
                  Engineering.
                </p>
                <p>Have 1+ year experience in web development.</p>
                <p>Love reading, do workouts, walking and edit videos.</p>
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className='bubbels'>
              {bubbles.map((b, key) => (
                <Bubble key={key} bubbel={b} text={""} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
