// Expanding Cards

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

// Scroll Transparecny

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

// Auto Text

const textEl = document.getElementById("autotext");
const text = "Unique. Authentic. Handcrafted";
let idx = 1;
let speed = 300 / 2;

writeText();

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx++;

  // if (idx > text.length) {
  //   idx = 1;
  // }
  setTimeout(writeText, speed);
}

const labels = document.querySelectorAll(".form-control label");
console.log(labels);

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});
