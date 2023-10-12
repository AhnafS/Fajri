const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClasses();
    panel.classList.add("active");
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("nav");
  if (window.scrollY > 50) {
    navbar.style.backgroundColor =
      "rgba(173, 216, 230, 0.7)"; /* Change transparency when scrolling */
  } else {
    navbar.style.backgroundColor =
      "rgba(173, 216, 230, 0.9)"; /* Reset to default when not scrolling */
  }
});
