import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { RxGlobe } from "react-icons/rx";

function ProjectsCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <RxGlobe  /> &nbsp;
          {props.isBlog ? "Blog" : "View Certificate"}
        </Button>
        {"\n"}
        {"\n"}

      </Card.Body>
    </Card>
  );
}
export default ProjectsCard;

