import React from "react";
import { Col, Row } from "reactstrap";
import Skill from "../Skill/Skill";
import SkillIcon from "../SkillIcon/SkillIcon";
import "./Skills.css";
function Skills() {
  const skills = [
    {
      name: "HTML, CSS, Bootstrap",
      percent: 100,
    },
    {
      name: "JavaScript, jQuery",
      percent: 100,
    },
    {
      name: "React",
      percent: 100,
    },
    {
      name: "Node.js",
      percent: 95,
    },
    {
      name: "Express",
      percent: 90,
    },
    {
      name: "MongoDB",
      percent: 90,
    },
    {
      name: "PHP/ Laravel",
      percent: 70,
    },
    {
      name: "MySQL",
      percent: 90,
    },
  ];

  const icons = [
    {
      name: "logos:html-5",
      size: 60,
      color: "",
    },
    {
      name: "logos:css-3",
      size: 60,
      color: "",
    },
    {
      name: "mdi:bootstrap",
      size: 60,
      color: "#51087E",
    },
    {
      name: "logos:javascript",
      size: 55,
      color: "",
    },
    {
      name: "logos:jquery",
      size: 20,
      color: "",
    },
    {
      name: "vscode-icons:file-type-reactjs",
      size: 60,
      color: "",
    },
    {
      name: "la:node",
      size: 70,
      color: "#00a300",
    },
    {
      name: "logos:express",
      size: 25,
      color: "",
    },
    {
      name: "logos:mongodb",
      size: 25,
      color: "",
    },
    {
      name: "logos:php",
      size: 40,
      color: "",
    },
    {
      name: "logos:laravel",
      size: 50,
      color: "",
    },
    {
      name: "logos:mysql",
      size: 45,
      color: "",
    },
  ];

  return (
    <div className='skills p-5'>
      <h2 className='text-center'>My Skills</h2>
      <div className='container'>
        <Row>
          <Col md={6}>
            <div className='mt-5 d-flex flex-wrap justify-content-between'>
              {icons.map((i, key) => (
                <SkillIcon key={key} icon={i} />
              ))}
            </div>
          </Col>
          <Col md={6}>
            <div className='mt-5 pt-5 d-flex flex-wrap justify-content-between'>
              {skills.map((s, key) => (
                <Skill key={key} skill={s} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Skills;
