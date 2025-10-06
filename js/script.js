const steps = document.querySelectorAll(".step");
const backpackImage = document.getElementById("backpackImage");

// Create observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const newImg = entry.target.getAttribute("data-img");
      backpackImage.src = "./assets/" + newImg;
    }
  });
}, { threshold: .8 }); // fires when half the element is visible

// Observe each section
steps.forEach(step => observer.observe(step));

