import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const ProjectCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      {/* ── CARD ── */}
      <div style={{
        background: "rgba(255, 252, 220, 0.92)",
        borderRadius: "16px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(184, 134, 11, 0.2)",
        border: "1px solid rgba(184, 134, 11, 0.25)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = "translateY(-6px)";
          e.currentTarget.style.boxShadow = "0 12px 32px rgba(184, 134, 11, 0.4)";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(184, 134, 11, 0.2)";
        }}
      >
        {/* Image with overlay */}
        <div style={{ position: "relative", overflow: "hidden", height: "200px" }}>
          <img
            src={props.imgPath}
            alt={props.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
            onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
          />
          {/* Category badge top-left */}
          {props.category && (
            <span style={{
              position: "absolute",
              top: "12px",
              left: "12px",
              background: "rgba(184, 134, 11, 0.9)",
              color: "#fff",
              fontSize: "11px",
              fontWeight: "600",
              padding: "4px 10px",
              borderRadius: "20px",
              letterSpacing: "0.5px",
              textTransform: "uppercase",
            }}>
              {props.category}
            </span>
          )}
          {/* Date badge top-right */}
          {props.date && (
            <span style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: "rgba(255,255,255,0.85)",
              color: "#7a5c00",
              fontSize: "11px",
              fontWeight: "600",
              padding: "4px 10px",
              borderRadius: "20px",
            }}>
              {props.date}
            </span>
          )}
        </div>

        {/* Body */}
        <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1 }}>

          {/* Title */}
          <h4 style={{
            color: "#2c1a00",
            fontWeight: "700",
            marginBottom: "10px",
            fontSize: "1.15em",
          }}>
            {props.title}
          </h4>

          {/* Description — truncated */}
          <p style={{
            color: "#4a3800",
            fontSize: "14px",
            lineHeight: "1.6",
            marginBottom: "14px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            flex: 1,
          }}>
            {props.description}
          </p>

          {/* Read more */}
          <button
            onClick={() => setExpanded(true)}
            style={{
              background: "none",
              border: "none",
              color: "#b8860b",
              fontSize: "13px",
              fontWeight: "600",
              padding: "0",
              cursor: "pointer",
              textAlign: "left",
              marginBottom: "14px",
              textDecoration: "underline",
            }}
          >
            Read more 
          </button>

          {/* Tech stack badges */}
          {props.techStack && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
              {props.techStack.map((tech, i) => (
                <span key={i} style={{
                  background: "rgba(184, 134, 11, 0.12)",
                  color: "#7a5c00",
                  border: "1px solid rgba(184, 134, 11, 0.35)",
                  borderRadius: "20px",
                  fontSize: "11px",
                  fontWeight: "600",
                  padding: "3px 10px",
                }}>
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div style={{ borderTop: "1px solid rgba(184,134,11,0.2)", paddingTop: "14px", display: "flex", gap: "10px" }}>
            {/* GitHub button */}
            <a
              href={props.ghLink}
              target="_blank"
              rel="noreferrer"
              style={{
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                background: "#2c1a00",
                color: "#fff",
                borderRadius: "8px",
                padding: "8px 12px",
                fontSize: "13px",
                fontWeight: "600",
                textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => e.currentTarget.style.background = "#b8860b"}
              onMouseLeave={e => e.currentTarget.style.background = "#2c1a00"}
            >
              <BsGithub size={15} /> {props.isBlog ? "Blog" : "GitHub"}
            </a>

            {/* Demo button */}
            {!props.isBlog && props.demoLink && (
              <a
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  flex: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  background: "#b8860b",
                  color: "#fff",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "13px",
                  fontWeight: "600",
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#9a7009"}
                onMouseLeave={e => e.currentTarget.style.background = "#b8860b"}
              >
                <CgWebsite size={15} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ── MODAL expanded description ── */}
      {expanded && (
        <div
          onClick={() => setExpanded(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(0,0,0,0.5)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: "#fffde8",
              borderRadius: "16px",
              padding: "32px",
              maxWidth: "560px",
              width: "100%",
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              position: "relative",
            }}
          >
            <button
              onClick={() => setExpanded(false)}
              style={{
                position: "absolute", top: "16px", right: "16px",
                background: "none", border: "none",
                cursor: "pointer", color: "#7a5c00", fontSize: "20px",
              }}
            >
              <AiOutlineClose />
            </button>

            <img
              src={props.imgPath}
              alt={props.title}
              style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "10px", marginBottom: "16px" }}
            />

            <h3 style={{ color: "#2c1a00", fontWeight: "700", marginBottom: "12px" }}>{props.title}</h3>

            {props.category && (
              <span style={{
                background: "rgba(184,134,11,0.15)",
                color: "#7a5c00",
                fontSize: "12px",
                fontWeight: "600",
                padding: "4px 12px",
                borderRadius: "20px",
                marginBottom: "14px",
                display: "inline-block",
              }}>
                {props.category}
              </span>
            )}

            <p style={{ color: "#4a3800", fontSize: "15px", lineHeight: "1.7", margin: "14px 0" }}>
              {props.description}
            </p>

            {props.techStack && (
              <>
                <p style={{ color: "#7a5c00", fontWeight: "600", fontSize: "13px", marginBottom: "8px" }}>BUILT WITH</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
                  {props.techStack.map((tech, i) => (
                    <span key={i} style={{
                      background: "rgba(184,134,11,0.12)",
                      color: "#7a5c00",
                      border: "1px solid rgba(184,134,11,0.35)",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "600",
                      padding: "4px 12px",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </>
            )}

            <div style={{ display: "flex", gap: "10px" }}>
              <a href={props.ghLink} target="_blank" rel="noreferrer"
                style={{
                  flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                  gap: "6px", background: "#2c1a00", color: "#fff",
                  borderRadius: "8px", padding: "10px", fontSize: "14px",
                  fontWeight: "600", textDecoration: "none",
                }}>
                <BsGithub /> GitHub
              </a>
              {!props.isBlog && props.demoLink && (
                <a href={props.demoLink} target="_blank" rel="noreferrer"
                  style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                    gap: "6px", background: "#b8860b", color: "#fff",
                    borderRadius: "8px", padding: "10px", fontSize: "14px",
                    fontWeight: "600", textDecoration: "none",
                  }}>
                  <CgWebsite /> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;