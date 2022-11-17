import React from "react";
import { Col, Row } from "reactstrap";
// import { Icon } from "@iconify/react";
import "./Skills.css";
import Point from "./../Point/Point";
function Skills() {
  return (
    <div className='skills p-5'>
      <h2 className='text-center'>My Skills</h2>
      <div className='container'>
        <Row>
          <Col md={6}>
            <img
              alt='mern'
              width='70%'
              src='https://www.sbr-technologies.com/wp-content/uploads/2021/06/mern.png'
            />
            <img
              alt='mern'
              width='60%'
              src='https://www.audero.it/blog/wp-content/uploads/2014/09/front-end-stack.png'
            />
            <img
              alt='mern'
              width='18%'
              src='https://www.w3schools.com/whatis/img_bootstrap.png'
            />

            <img
              alt='mern'
              width='25%'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png'
            />
            <img
              alt='mern'
              width='25%'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png'
            />

            <img
              alt='mern'
              width='25%'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/JQuery-Logo.svg/2560px-JQuery-Logo.svg.png'
            />

            <img
              alt='mern'
              width='30%'
              src='https://1000logos.net/wp-content/uploads/2020/08/MySQL-Logo.png'
            />
          </Col>
          <Col md={6}>
            <div className='pt-5'>
              <ul className='list-unstyled'>
                <li className='m-3'>
                  <Point /> HTML, CSS, Bootstrap:{" "}
                  <span class='badge bg-light-pink'>100%</span>
                </li>
                <li className='m-3'>
                  <Point /> JavaScript, jQuery:{" "}
                  <span class='badge bg-light-pink'>100%</span>
                </li>
                <li className='m-3'>
                  <Point /> React: <span class='badge bg-light-pink'>90%</span>
                </li>
                <li className='m-3'>
                  <Point /> Node.js:{" "}
                  <span class='badge bg-light-pink'>100%</span>
                </li>
                <li className='m-3'>
                  <Point /> MonogoDB:{" "}
                  <span class='badge bg-light-pink'>85%</span>
                </li>
                <li className='m-3'>
                  <Point /> Express:{" "}
                  <span class='badge bg-light-pink'>90%</span>
                </li>
                <li className='m-3'>
                  <Point /> PHP/ Laravel:{" "}
                  <span class='badge bg-light-pink'>70%</span>
                </li>
                <li className='m-3'>
                  <Point /> MySQL: <span class='badge bg-light-pink'>90%</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Skills;
