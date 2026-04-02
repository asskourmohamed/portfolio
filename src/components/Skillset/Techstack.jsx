import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiPython, DiJava } from "react-icons/di";
import { SiMongodb, SiHtml5, SiDocker, SiAwsamplify, SiDjango, SiPostgresql, SiGooglecloud, SiTensorflow, SiPytorch, SiGitlab, SiLinux } from "react-icons/si";

const Techstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiHtml5 style={{ color: "#E34F26" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 style={{ color: "#F7DF1E" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython style={{ color: "#3776AB" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiJava style={{ color: "#007396" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiReact style={{ color: "#61DAFB" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs style={{ color: "#339933" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDjango style={{ color: "#092E20" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb style={{ color: "#47A248" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql style={{ color: "#336791" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker style={{ color: "#2496ED" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab style={{ color: "#FC6D26" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiGit style={{ color: "#F05032" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAwsamplify style={{ color: "#FF9900" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud style={{ color: "#4285F4" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow style={{ color: "#FF6F00" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch style={{ color: "#EE4C2C" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{ color: "#FCC624" }} />
      </Col>

    </Row>
  );
};

export default Techstack;