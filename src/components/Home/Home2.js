import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import { ImPointRight } from "react-icons/im";
import Particle from "../Particle";

import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import Github from "./Github";
import Resources from "./Resources";
import pdf from "../../Assets/../Assets/sakshamcv.pdf";
import linkedin from "../../Assets/background/linkedin.svg";
import githubIcon from "../../Assets/background/github.svg";
import whatsapp from "../../Assets/background/whatsapp.svg";
import telegram from "../../Assets/background/telegram.svg";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Particle />
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.9em" }}>KNOW WHO I'M</h1>
            <p className="home-about-body">
              Hii Everyone, I am
              <b className="purple">
                <big> Saksham Pandey</big>
              </b>
              <br />
              <br />I am a B.Tech Student skilled in{" "}
              <b className="purple">
                {" "}
                MERN Development, AWS Cloud ,Version Control,Java Development
                and SEO Optimization
              </b>
              . <br />
              In my portfolio, I showcase expertise in the MERN stack for
              full-stack web development, AWS for deployment and management, SEO
              for enhanced website visibility, and Java programming for scalable
              web applications. With a focus on delivering efficient solutions
              tailored to modern web development needs, my portfolio reflects a
              comprehensive skill set and a track record of successful projects.
              <br />
              <br />
              <b className="purple"> My field of Interest's are : &nbsp;</b>
              <br />
              <ul>
                <li className="about-activity">
                  <ImPointRight />
                  Full stack Development
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ImPointRight />
                  Technical Support 
                  <br />
                  <ImPointRight />
                  Software Testing
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ImPointRight />
                  SEO optimization
                  <br />
                  <ImPointRight />
                  Web Security
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <ImPointRight />
                  Figma
                  <br />
                </li>
              </ul>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                style={{ maxWidth: "250px" }}
              >
                <AiOutlineDownload />
                &nbsp;Download CV
              </Button>
              <br />
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} id="image" className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <h1 style={{ fontSize: "2.9em", color: "white" }}>
            <strong> Here's some Coding Resources you may like</strong>
          </h1>
          <Resources />

          
        </Row>
        <Github />

        {/* CONNECT WITH US  */}
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Connect With Me</h1>
            <p>
              Feel free to talk
              <br />
              <div className="social-media">
                <a
                  href="https://www.linkedin.com/in/saksham-pandey21/"
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
                  href="https://api.whatsapp.com/send/?phone=%2B918787050004&text=Hello+Saksham"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={whatsapp} alt="Whatsapp" />
                </a>
                <a
                  href="https://t.me/@Saksham21s"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={telegram} alt="telegram" />
                </a>
              </div>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
