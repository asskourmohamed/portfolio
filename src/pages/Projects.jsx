import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import signbridge from "../assets/projects/Signbridge.png";
import mernapp from "../assets/projects/skillmap.png";
import iaindevops from "../assets/projects/IAindevops.png";
const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container style={{ position: "relative", zIndex: 1 }}>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works</strong>
        </h1>
        <p style={{
          color: "#5a4a00",
          fontSize: "1.1em",
          textAlign: "center",
          marginBottom: "40px",
          fontStyle: "italic",
        }}>
          Projects I've built — from concept to{" "}
          <strong style={{ color: "#b8860b" }}>deployment</strong>.
        </p>

        <Row style={{ justifyContent: "center", gap: "20px", paddingBottom: "40px" }}>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={signbridge}
              isBlog={false}
              title="SignBridge"
              category="AI / Web App"
              date="Jan 2026"
              description="A web platform for bidirectional translation between Sign Language and Text with interactive learning features. Implements real-time sign recognition using MediaPipe and ML models. Features a Text-to-Sign module generating animations through a 2D avatar. Built with Django MVT architecture and a dedicated Flask microservice for ML processing."
              techStack={["Python", "Django", "Flask", "MySQL", "MediaPipe", "TensorFlow", "PyTorch", "OpenCV", "Bootstrap"]}
              ghLink="https://github.com/asskourmohamed/PPP-SignBridge"
            />
          </Col>

          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={mernapp}
              isBlog={false}
              title="Internal Experience Sharing App"
              category="DevOps / Full-Stack"
              date="Summer 2025"
              description="A web application for sharing experiences, projects, and skills within SII Group company. Built with the MERN stack and deployed with an automated CI/CD pipeline using GitLab CI for continuous deployment of both front-end (React) and back-end (Node.js). Containerized with Docker for reliable and scalable deployments."
              techStack={["MongoDB", "Express.js", "React", "Node.js", "GitLab CI/CD", "Docker"]}
              ghLink="https://github.com/asskourmohamed/SkillMap-MERN"
            />
          </Col>
          <Col md={5} className="project-card">
            <ProjectCard
              imgPath={iaindevops}
              isBlog={false}
              title="CaptainOps — AI DevOps Assistant"
              category="AIOps / LLM / RAG"
              date="2026"
              description="An AI-powered internal assistant that ingests company documentation, CI/CD pipeline logs, and infrastructure configs to answer DevOps questions in natural language. Features real-time anomaly detection in logs using Isolation Forest, automated incident summaries, and deployment health reports. Built with a RAG architecture (LangChain + ChromaDB) served via a FastAPI backend, containerized with Docker and deployed on AWS."
              techStack={["Python", "LangChain", "ChromaDB", "FastAPI", "Docker", "AWS", "React", "OpenAI API", "GitLab CI"]}
              ghLink="https://github.com/asskourmohamed/CaptainOps"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
};

export default Projects;