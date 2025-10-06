const steps = document.querySelectorAll(".step");
const backpackImage = document.getElementById("backpackImage");

// Create observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const newImg = entry.target.getAttribute("data-img");
      backpackImage.src = "images/" + newImg;
    }
  });
}, { threshold: 0.5 }); // fires when half the element is visible

// Observe each section
steps.forEach(step => observer.observe(step));

