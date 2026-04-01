import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const About = () => {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em", color: "#1a1a1a" }}>
              LET ME <span className="yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body" style={{ color: "#2c2c2c" }}>
              Hi, my name is{" "}
              <span className="yellow">
                <b>Mohamed ASSKOUR</b>
              </span>{" "}
              and I'm from{" "}
              <span className="yellow">
                <b>Agadir, Morocco.</b>
              </span>
              <br />
              <br />
              I'm a second-year engineering student at{" "}
              <b className="yellow">INPT Rabat</b>, specializing in{" "}
              <b className="yellow">Ubiquitous and Distributed Systems</b> —
              Cloud &amp; IoT.
              <br />
              <br />
              As a{" "}
              <b className="yellow">Full-Stack Developer</b> and{" "}
              <b className="yellow">DevOps enthusiast</b>, I enjoy building
              scalable systems and automating deployment pipelines.
              <br />
              <br />
              I am proficient in{" "}
              <b className="yellow">Python, JavaScript, Java, C/C++</b> and
              have hands-on experience with frameworks like{" "}
              <b className="yellow">React, Node.js, Django</b> and tools like{" "}
              <b className="yellow">Docker, GitLab CI/CD.</b>
              <br />
              <br />
              I have a strong interest in{" "}
              <b className="yellow">Cloud Computing</b> (AWS, Google Cloud,
              OpenStack) and{" "}
              <i>
                <b className="yellow">Artificial Intelligence</b>
              </i>{" "}
              — particularly Machine Learning and Deep Learning with{" "}
              <b className="yellow">TensorFlow &amp; PyTorch.</b>
              <br />
              <br />
              Currently, I serve as{" "}
              <b className="yellow">Head of the AI Unit</b> at the Electronics
              and Embedded Systems Club (CESE) at INPT, where I organize
              workshops and mentor peers.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={LaptopImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1 style={{ color: "#1a1a1a" }}>FIND ME ON</h1>
            <p style={{ color: "#2c2c2c" }}>
              {" "}
              <span className="yellow">bring to me your thoughts </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/asskourmohamed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/asskour-mohamed"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:asskourmohamed1@gmail.com"
                  className="icon-colour home-social-icons"
                  aria-label="email"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;