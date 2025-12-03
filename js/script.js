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

const slides = [
  { image: "../improv/Improv1.png" },
  { image: "../improv/Improv2.png" },
  { image: "../improv/Improv3.png" },
  { image: "../improv/Improv3.png" },
  { image: "../improv/Improv4.png" },
  { image: "../improv/Improv5.png" },
  { image: "../improv/Improv6.png" },
  { image: "../improv/Improv7.png" },
  { image: "../improv/Improv8.png" },
  { image: "../improv/Improv9.png" },
  { image: "../improv/Improv10.png" },
  { image: "../improv/Improv11.png" },
  { image: "../improv/Improv12.png" },
  { image: "../improv/Improv13.png" },
  { image: "../improv/Improv14.png" },
  { image: "../improv/Improv15.png" },
  { image: "../improv/Improv16.png" },
  { image: "../improv/Improv17.png" },
  { image: "../improv/Improv18.png" },
  { image: "../improv/Improv19.png" },
  { image: "../improv/Improv20.png" },
  { image: "../improv/Improv21.png" },
  { image: "../improv/Improv22.png" },
  { image: "../improv/Improv23.png" },
  { image: "../improv/Improv24.png" },
  { image: "../improv/Improv25.png" },
  { image: "../improv/Improv26.png" },
];

let currentSlide = 0;

const bgModule = document.getElementById("bgModule");
const bgText = document.getElementById("bgText");

// Preload all images in the DOM
slides.forEach((slide, i) => {
  const img = document.createElement("img");
  img.src = slide.image;
  img.classList.add("slide-img");
  if (i === 0) img.classList.add("active"); // Show the first image immediately
  bgModule.appendChild(img);
});

const images = document.querySelectorAll("#bgModule .slide-img");

bgModule.addEventListener("click", () => {
  images[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % images.length;
  images[currentSlide].classList.add("active");

  // If you want text changes to be instant too:
  bgText.textContent = slides[currentSlide].text || "";
});
