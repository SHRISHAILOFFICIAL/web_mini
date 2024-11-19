import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";

function AboutUsComp() {
  return (
    <>
      <Jumbotron fluid>
        <Container>
          <div className="about-us">
            <h1>The Web tech team </h1>
            <h2>Shrishail Kone</h2>
            <h2>Sujal Sarnobat</h2>
            <h2>Skanda Prabhakar</h2>
            <p> </p>
          </div>
        </Container>
      </Jumbotron>
    </>
  );
}

export default AboutUsComp;
