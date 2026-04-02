import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiGithub,
  SiGitlab,
  SiDocker,
  SiVmware,
  SiOpenstack,
  SiAwsamplify,
  SiGooglecloud,
  SiMysql,
  SiLinux,
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode style={{ color: "#007ACC" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiPostman style={{ color: "#FF6C37" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGithub style={{ color: "#181717" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab style={{ color: "#FC6D26" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiDocker style={{ color: "#2496ED" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiAwsamplify style={{ color: "#FF9900" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud style={{ color: "#4285F4" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiVmware style={{ color: "#607078" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiOpenstack style={{ color: "#ED1944" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiMysql style={{ color: "#4479A1" }} />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiLinux style={{ color: "#FCC624" }} />
      </Col>

    </Row>
  );
};

export default Toolstack;