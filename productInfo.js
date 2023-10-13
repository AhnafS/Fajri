import { allProducts } from "./consts.js";

const params = new URLSearchParams(document.location.search);
const id = params.get("id");
const product = allProducts[id];

document.querySelector(".product-image img").src = product.image;
document.querySelector(".product-desc h1").innerHTML = product.name;
document.querySelector(".product-desc p").innerHTML = product.desc;
document.querySelector(
  ".product-price h2"
).innerHTML = `Price: $${product.price}`;

// Collapasable

let coll = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
