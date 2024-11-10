import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectsCard from "./CertificationCard-back";
import Seo from "./certificates/seo.jpeg";
import CWA from "./certificates/CWA.png";
import Digitalmarket from "./certificates/digitalmarket.png";
import Dataflair from "./certificates/Dataflair-java.png";
import PythonInt from "./certificates/python.jpeg";
import Prompteng from "./certificates/Prompteng.png";
import ReactSoft from "./certificates/Reactsoftware.png";
import AgileMang from "./certificates/AgileMang.png";
import "./Certificate.css"



function Projects() {
  return (
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={CWA}
              isBlog={false}
              title="Web Analytics "
             description="Certifying Organization :- Accenture "
              ghLink="https://www.futurelearn.com/certificates/5l8zzpi"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={Dataflair}
              isBlog={false}
              title="Java Training"
               description="Certifying Organization :- DataFlair "
              ghLink="https://data-flair.training/verify/780961E0FE-77FD77319D-73675F8FE9/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={ReactSoft}
              isBlog={false}
              title="React Software Architecture"
               description="Certifying Organization :- Linkedin "
              ghLink="https://www.linkedin.com/learning/certificates/c9fcf20f3bcec2094fb23089dd0342a05b6260768b483af045d8eb854ae500d1"
            />
          </Col>

         

          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={Digitalmarket}
              isBlog={false}
              title="Digital Marketing"
             description="Certifying Organization :- Accenture "
              ghLink="https://www.futurelearn.com/certificates/iazifqx"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={Seo}
              isBlog={false}
              title="SEO OPTIMIZATION"
             description="Certifying Organization :- Udemy "
              ghLink="https://www.udemy.com/certificate/UC-9f0c7d1e-6b42-4bd0-8894-6875341c248f/"
            />
          </Col>

          

          
          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={Prompteng}
              isBlog={false}
              title="Prompt Engineering For Generative AI"
               description="Certifying Organization :- Linkedin "
              ghLink=" https://www.linkedin.com/learning/certificates/c5ee5ff84887146f70cf0e4f1e424a01ae37183e36d34fd253cc90fbb729e1b0"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={PythonInt}
              isBlog={false}
              title="Python Programming Training"
               description="Organization:- Internshala "
              ghLink="https://github.com/Saksham21s/WeatherCheck.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectsCard
              imgPath={AgileMang}
              isBlog={false}
              title="Agile Project Managment"
               description="Certifying Organization :- Linkedin "
              ghLink="https://www.linkedin.com/learning/certificates/1ec9212710d09d084a63a3689d33923166fd2f3eb3b814c929a5106f3142b2c7"
            />
          </Col>

        </Row>
       
      </Container>
  );
}

export default Projects;

