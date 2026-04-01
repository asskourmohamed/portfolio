import React from "react";
import Typewriter from "typewriter-effect";

const Type = () => {
    return (
        <Typewriter
          options={{
            strings: [
              "Cloud & DevSecOps Engineer",
              "Full-Stack Developer ",
              "IoT & Distributed Systems Student",
              "AI & Machine Learning Enthusiast"
            ],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
          }}
        />
      )
}

export default Type