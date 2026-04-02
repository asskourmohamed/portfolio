import React from "react";
import { Container } from "react-bootstrap";

import Particle from '../components/Particle'
import Techstack from "../components/Skillset/Techstack";
import Toolstack from "../components/Skillset/Toolstack";

const Skillset = () => {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>

        <h1 className="project-heading">
          Professional <strong className="yellow">Skillset</strong>
        </h1>
        <p style={{
          color: "#5a4a00",
          fontSize: "1.1em",
          textAlign: "center",
          marginBottom: "40px",
          fontStyle: "italic"
        }}>
          Building scalable systems — from{" "}
          <strong style={{ color: "#b8860b" }}>cloud infrastructure</strong>{" "}
          to{" "}
          <strong style={{ color: "#b8860b" }}>intelligent applications</strong>.
        </p>

        <Techstack />

        <h1 className="project-heading">
          <strong className="yellow">Tools</strong> I Use
        </h1>
        <p style={{
          color: "#5a4a00",
          fontSize: "1.1em",
          textAlign: "center",
          marginBottom: "40px",
          fontStyle: "italic"
        }}>
          The tools that power my{" "}
          <strong style={{ color: "#b8860b" }}>development</strong>{" "}
          and{" "}
          <strong style={{ color: "#b8860b" }}>deployment</strong>{" "}
          workflows.
        </p>

        <Toolstack />

      </Container>
    </Container>
  );
};

export default Skillset;