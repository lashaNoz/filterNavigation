const imagesWarapper = document.querySelector(".images");
const navLinks = document.querySelectorAll(".nav-link");
const carTypes = [
  ["suv", 6],
  ["sport", 7],
  ["classic", 8],
  ["sedan", 10],
];

carTypes.forEach((type) => {
  for (let i = 0; i < type[1]; i++) {
    const img = document.createElement("img");
    img.setAttribute("data-type", type[0]);
    img.src = `images/${type[0]}-${i + 1}.jpg`;
    imagesWarapper.appendChild(img);
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector(".nav-link.active").classList.remove("active");
    link.classList.add("active");

    const images = document.querySelectorAll(".images img");
    images.forEach((img) => {
      img.classList.add("hide");

      if (link.getAttribute("data-type") === img.getAttribute("data-type")) {
        img.classList.remove("hide");
      } else if (link.getAttribute("data-type") === "all") {
        img.classList.remove("hide");
      }
    });
  });
});
