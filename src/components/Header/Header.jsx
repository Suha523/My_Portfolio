import React from "react";
import "./Header.css";
import Typewriter from "typewriter-effect";
import { Col, Row } from "reactstrap";

function Header() {
  return (
    <div className='header'>
      <div className='container'>
        <Row>
          <Col md={6}>
            <div className='image'>
              <div className='img'></div>
              <div className='circle1 circle_animation'></div>
              <div className='circle2 circle_animation'></div>
            </div>
          </Col>
          <Col md={6}>
            <h1>
              <Typewriter
                key='h'
                options={{
                  strings: [
                    `Hi, I'm Suha a full stack Engineer`,
                    `SUHA : Self-assured, Unassuming, Hopeful, Ambitious`,
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Header;
