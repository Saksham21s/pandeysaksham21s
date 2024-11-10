import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/me2.jpg";
import laptopImg2 from "../../Assets/me3.avif";
import Toolstack from "./Toolstack";
import ImageSlider from './CertificationCard';
import Achievements from './Achievements';
import linkedin from "../../Assets/background/linkedin.svg";
import githubIcon from "../../Assets/background/github.svg";
import whatsapp from "../../Assets/background/whatsapp.svg";
import telegram from "../../Assets/background/telegram.svg";


function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ color: "yellow" , fontSize: "2.1em", paddingBottom: "20px" }}>
              My <strong >Introduction</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img2" /><br/><br/><br/><br/>
            <img src={laptopImg2} alt="about" className="img2" />
          </Col></Row>
         
           
         
        <h1 className="project-heading">
          Professional <strong >Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong >Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          Major  <strong >Certifications </strong>
        </h1>
        <ImageSlider/>

        {/* <h1 className="project-heading">
            <strong className="purple"> Achievements</strong>
        </h1> */}
        
        <Achievements/>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect With Me</h1>
            <p>
              Feel free to talk
            </p>
            <div className="social-media"><a
        href="https://www.linkedin.com/in/codevinayak"
        target="_blank"
        rel="noreferrer"
      >
        <img src={linkedin} alt="Linkedin" />
      </a>
        <a
          href="https://github.com/Saksham21s/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href="https://api.whatsapp.com/send/?phone=%2B919630576848&text=Hello+Vinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={whatsapp} alt="Whatsapp" />
        </a>
        <a
          href="https://t.me/CodeVinayak"
          target="_blank"
          rel="noreferrer"
        >
          <img src={telegram} alt="telegram" />
        </a></div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
