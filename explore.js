const attractionsData = {
  "sita-fall": {
    title: "Sita Falls",
    shortDesc: "Sita Falls is a beautiful waterfall near Ranchi, surrounded by forests...",
    fullDesc: "Sita Falls is one of the most stunning waterfalls of Jharkhand. Surrounded by lush forests and rocky terrains, it provides a serene environment. Trekking and photography here are very popular, especially in the monsoon season.",
    images: ["sita1.jpg", "sita2.jpg", "sita3.jpg"],
    besttime: "October – March",
    airport: "Birsa Munda Airport, Ranchi",
    railway: "Ranchi Junction",
    map: "https://www.google.com/maps/embed?pb=...",
    nearby: ["Hundru Falls", "Jonha Falls", "Dassam Falls"]
  }
  // more attractions 
};

const params = new URLSearchParams(window.location.search);
const id = params.get("id");

if (id && attractionsData[id]) {
  const data = attractionsData[id];

  document.getElementById("title").textContent = data.title;
  document.getElementById("short-desc").textContent = data.shortDesc;
  document.getElementById("full-desc").textContent = data.fullDesc;
  document.getElementById("airport").textContent = data.airport;
  document.getElementById("railway").textContent = data.railway;
  document.getElementById("besttime").textContent = data.besttime;
  document.getElementById("map").src = data.map;

  const slideshow = document.getElementById("slideshow");
  data.images.forEach((img, index) => {
    const image = document.createElement("img");
    image.src = img;
    if (index === 0) image.classList.add("active");
    slideshow.appendChild(image);
  });

  const nearbyContainer = document.getElementById("nearby");
  data.nearby.forEach(place => {
    const card = document.createElement("div");
    card.className = "attr-card";
    card.innerHTML = `<h3>${place}</h3>`;
    nearbyContainer.appendChild(card);
  });
}

let currentSlide = 0;
function showSlide(index) {
  const slides = document.querySelectorAll(".slides img");
  slides.forEach((s, i) => s.classList.toggle("active", i === index));
}
function moveSlide(dir) {
  const slides = document.querySelectorAll(".slides img");
  currentSlide += dir;
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;
  showSlide(currentSlide);
}

function toggleReadMore(btn) {
  const shortDesc = document.getElementById("short-desc");
  const fullDesc = document.getElementById("full-desc");

  if (fullDesc.classList.contains("hidden")) {
    fullDesc.classList.remove("hidden");
    shortDesc.classList.add("hidden");
    btn.textContent = "Read Less";
  } else {
    fullDesc.classList.add("hidden");
    shortDesc.classList.remove("hidden");
    btn.textContent = "Read More";
  }
}
