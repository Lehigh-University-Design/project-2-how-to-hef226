const steps = document.querySelectorAll(".step");
const backpackImage = document.getElementById("backpackImage");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const newImg = entry.target.getAttribute("data-img");
        backpackImage.src = "../assets/" + newImg;
      }
    });
  },
  { threshold: 0.8 } // triggers when about half the step is visible
);

steps.forEach((step) => observer.observe(step));
