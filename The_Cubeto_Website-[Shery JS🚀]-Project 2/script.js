Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["videos/0.mp4", "videos/3.mp4", "videos/2.mp4"],
});

let sections = document.querySelectorAll(".fleftelem");
Shery.imageEffect(".images", {
  style: 5,
  config:{onMouse:{value:1}},
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

gsap.to(".fleftelem", {
  scrollTrigger: {
    trigger: "#fcontainer",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-300%",
  ease: Power1.ease, // Fix: Use Power1.ease instead of power1
});
