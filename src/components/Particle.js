import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        background: {
          color: {
            value: "#fdf8e1",
          },
        },
        fpsLimit: 60,
        interactivity: {
          detectsOn: "canvas",
          events: {
            onHover: {
              enable: true,
              mode: "grab",
            },
            onClick: {
              enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 140,
              lineLinked: {
                opacity: 0.6,
              },
            },
            push: {
              quantity: 2,
            },
          },
        },
        particles: {
          color: {
            value: ["#b8860b", "#c9a800", "#d4a800", "#8a6400", "#e6c84a"],
          },
          lineLinked: {
            color: "#b8860b",
            distance: 130,
            enable: true,
            opacity: 0.35,
            width: 1.2,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: true,
            speed: 0.8,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              valueArea: 900,
            },
            value: 80,
          },
          opacity: {
            value: 0.7,
            random: true,
            anim: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.3,
            },
          },
          shape: {
            type: "circle",
          },
          size: {
            value: 4,
            random: true,
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default Particle;