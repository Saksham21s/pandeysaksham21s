import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
          My name is <strong>Saksham Pandey</strong>, and I am a final-year B.Tech Computer Science Engineering student at Dev Bhoomi Uttarakhand University. I have a strong passion for technology and hands-on experience in the fields of computer networking, web development, DBMS, and OS.<br/><br/>
          Throughout my college journey, I have worked on various projects, such as a text-to-handwritten document generator, language translator, and food delivery app, which have improved my problem-solving skills and clarified my technical knowledge by applying it to real-world problems.One of my project which is Text to Handwritten Document Generator is currently being used by more then 500 users <br />
            <br /> </p>
           <p style={{textAlign:"justify"}}> Beyond projects, my experiences have taught me valuable lessons. I won a hackathon, where I learned to handle complex challenges and collaborate closely with a team. Later, I ranked in the top 1% in the Naukri Campus Contest, competing with over 500,000 students, which taught me to stay focused and always put in my best effort. I also managed several campus events, which taught me a lot about planning, being flexible, and working well with others.
            <br />    <br />
Additionally, my active streak of over <strong> 200 days on LeetCode and GitHub </strong>has taught me the importance of consistency and how small, regular efforts lead to substantial progress.
<br /> </p><br /> 

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
