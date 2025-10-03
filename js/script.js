const steps = document.querySelectorAll(".step");
const backpackImage = document.getElementById("backpackImage");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const newImg = entry.target.getAttribute("data-img");
      backpackImage.src = "images/" + newImg;
    }
  });
}, { threshold: 0.5 });

steps.forEach(step => observer.observe(step));
