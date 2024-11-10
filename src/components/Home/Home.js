import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "./home-top-logo.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import "./Card.css"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Saksham Pandey</strong>
              </h1>
              <div style={{ padding: 50, textAlign: "left" }}>
                <b>My Field of Interest</b>
                <Type />
              </div>
              <div>
                <h3 align="left">▶ Support me via:</h3>
                <br />
                <a href="https://www.buymeacoffee.com/Saksham21s" target="_blank" rel="noopener noreferrer" className="buy-me-coffee-link">
                <img
                    src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-1.svg"
                    height="50"
                    width="210"
                    alt="Support me via Buy Me a Coffee"
                  />
                </a>
               
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;