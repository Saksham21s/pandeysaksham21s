import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCard from "./ProjectsCard";
import Particle from "../Particle";
import language from "../../Assets/Projects/language.png";
import portfolio from "../../Assets/Projects/portfolio.webp";
import TWHR from "../../Assets/Projects/texttohwr.jpg";
import LMS from "../../Assets/Projects/library.webp";
import Lost from "../../Assets/Projects/lostandfound.jpg";
import Bookshelf from "../../Assets/Projects/virtualbook.png";
import food from "../../Assets/Projects/food.jpg";
import hotel from "../../Assets/Projects/hotel.jpg";
import weather from "../../Assets/Projects/weather.png";
import linkedin from "../../Assets/background/linkedin.svg";
import githubIcon from "../../Assets/background/github.svg";
import whatsapp from "../../Assets/background/whatsapp.svg";
import telegram from "../../Assets/background/telegram.svg";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Some of my <strong >Good Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Take a look on it
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={TWHR}
              isBlog={false}
              title="Text to Handwritten Document Generator"
             description="A web application that helps to generate document in Handwritten Formate from given txt document ."
              ghLink="https://github.com/Saksham21s/HandWritting"
              demoLink="https://hand-writting.vercel.app/" 
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={LMS}
              isBlog={false}
              title="Library Managment System"
             description="A web application that contains admin and user panel helps to use and manage library functionality individually."
              ghLink="https://github.com/Saksham21s/Library-Managment-System"
              demoLink="https://github.com/Saksham21s/Library-Managment-System" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={food}
              isBlog={false}
              title="Food Ordering System"
               description="A web application that helps us to order food online.It has feature of Online as well as COD Payment."
              ghLink="https://github.com/Saksham21s/Food-Store-main"
              demoLink="https://food-store-main.vercel.app/" 
            />
          </Col>
        
         
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={Lost}
              isBlog={false}
              title="Lost and Found "
             description="A web application Designed for solving the lost or others found devices ."
              ghLink="https://github.com/Saksham21s/Lost-And-Found-main"
              demoLink="https://lostandfound-five.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={language}
              isBlog={false}
              title="Language Translator"
              description="Language Translator app made using reactjs as frontend ."
              ghLink="https://github.com/Saksham21s/TRANSLATOR-APP/tree/main/translatoe-app"
              demoLink="https://translator-app-lime.vercel.app/" 
            />
     </Col>

     <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio Website"
              description="A Portfolio website made using React js and Tailwind CSS to showcase my work."
              ghLink="https://github.com/Saksham21s/portfolio.github.io"
              demoLink="https://portfolio-github-io-alpha.vercel.app/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={Bookshelf}
              isBlog={false}
              title="Virtual Bookshelf"
              description="Virtual Bookshelf is designed to store and bookmark your loved books all at a place ."
              ghLink="https://github.com/Saksham21s/Personal-Bookshelf"
              demoLink="https://personal-bookshelf-pi.vercel.app/" 
            />
            </Col>

          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={weather}
              isBlog={false}
              title="WeatherCheck App"
             description="A web application that checks Weather of the location we want to check and also provide the feature of forecasts."
              ghLink="https://github.com/Saksham21s/Weather-App"
              demoLink="https://weather-app-alpha-gilt.vercel.app/" 
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={hotel}
              isBlog={false}
              title="Hotel SunRise"
              description="A website of Hotel Sunrise which contains frontend made by html,css,js and backend with PHP with MySql Database."
              ghLink="https://github.com/Saksham21s/sunrisehotel.github.io"
              demoLink="https://github.com/Saksham21s/sunrisehotel.github.io/" 
            />
          </Col>

        
          
{/* 
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={vendingkart}
              isBlog={false}
              title="Vendingkart Solution"
              description="Frontend for Startup of Banglore."
              ghLink="https://github.com/Saksham21s/vendingkart.github.io"
              demoLink="https://vendingkart-github-io.vercel.app/" 
            />
          </Col> */}

        </Row>
       
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

export default Projects;

