import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { AiOutlineDownload } from "react-icons/ai";
import Particle from "../Particle";
import pdf from "../../Assets/sakshamcv.pdf";
import resume from "../../Assets/resume.png";
import linkedin from "../../Assets/background/linkedin.svg";
import githubIcon from "../../Assets/background/github.svg";
import whatsapp from "../../Assets/background/whatsapp.svg";
import telegram from "../../Assets/background/telegram.svg";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <h1 style={{ fontSize: "2.9em", color: "white", textAlign: "center" }}>
          <strong> Here's my CV, for more connect with me</strong>
        </h1>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px", margin: "1rem" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <img src={resume} className="img-fluid" alt="Resume" />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px", margin: "1rem" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>
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
    </div>
  );
}

export default ResumeNew;
