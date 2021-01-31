export const particleJsonProps = {
  //   particles: {
  //     number: {
  //       value: 45,
  //       density: {
  //         enable: true,
  //         value_area: 1000,
  //       },
  //     },
  //     color: {
  //       value: "#fff",
  //     },
  //     shape: {
  //       type: "circle",
  //       stroke: {
  //         width: 0,
  //         color: "#000000",
  //       },
  //       polygon: {
  //         nb_sides: 3,
  //       },
  //       //   image: {
  //       //     src: "img/github.svg",
  //       //     width: 100,
  //       //     height: 100,
  //       //   },
  //     },
  //     opacity: {
  //       value: 0.3,
  //       random: false,
  //       anim: {
  //         enable: false,
  //         speed: 0.5,
  //         opacity_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     size: {
  //       value: 5,
  //       random: false,
  //       anim: {
  //         enable: false,
  //         speed: 1,
  //         size_min: 0.5,
  //         sync: false,
  //       },
  //     },
  //     line_linked: {
  //       enable: true,
  //       distance: 180,
  //       color: "#fff",
  //       opacity: 0.3,
  //       width: 2,
  //     },
  //     move: {
  //       enable: true,
  //       speed: 1.8,
  //       direction: "none",
  //       random: true,
  //       straight: false,
  //       out_mode: "in",
  //       bounce: true,
  //       attract: {
  //         enable: false,
  //         rotateX: 600,
  //         rotateY: 1200,
  //       },
  //     },
  //   },
  //   interactivity: {
  //     detect_on: "window",
  //     events: {
  //       onhover: {
  //         enable: true,
  //         mode: "bubble",
  //         opacity: 0.4,
  //       },
  //       onclick: {
  //         enable: true,
  //         mode: "remove",
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       grab: {
  //         distance: 400,
  //         line_linked: {
  //           opacity: 1,
  //         },
  //       },
  //       bubble: {
  //         distance: 100,
  //         size: 14,
  //         duration: 2,
  //         opacity: 0.3,
  //         speed: 2,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //       push: {
  //         particles_nb: 4,
  //       },
  //       remove: {
  //         particles_nb: 2,
  //       },
  //     },
  //   },
  //   retina_detect: true,
  // };

  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 2,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 1200,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "remove",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 150,
        size: 10,
        duration: 5,
        opacity: 0.2,
        speed: 1,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 1,
      },
    },
  },
  retina_detect: true,
};
