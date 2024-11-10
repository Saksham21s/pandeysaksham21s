import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
      <strong >  Days I Code </strong>
      </h1>
      <GitHubCalendar
        username="Saksham21s"
        blockSize={18}
        blockMargin={5}
        color="yellow"
        fontSize={26}
      />
    </Row>
  );
}

export default Github;