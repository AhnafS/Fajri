import { allProducts } from "./consts.js";

const productElement = document.querySelector("#product-container");
const makeProductCard = (product) => {
  let div = document.createElement("div");
  div.classList.add("product-card");
  div.innerHTML = `
        <div class="product-tumb">
        <img
          src="${product.image}"
          alt=""
        />
      </div>
      <div class="product-details">
        <h4 style="text-align: center;"><a href="productInfo.html?id=${product.id}">${product.name}</a></h4>
        <div class="product-bottom-details">
          <div class="product-price">$${product.price}</div>
          <div class="product-links">
            <a href="productInfo.html?id=${product.id}"><button class="button-12" role="button">View Info</button></a>
          </div>
        </div>
      </div>
    `;
  return div;
};

for (let i = 0; i < allProducts.length; i++) {
  const newProduct = makeProductCard(allProducts[i]);
  if (i < allProducts.length / 5) {
    productElement.prepend(newProduct);
  } else {
    productElement.appendChild(newProduct);
  }
}

// Testimonials

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Tameem Ahmed",
    position: "Software Engineer",
    photo:
      "assets/1688489015292 (1).jpg",
    text: "I absolutely love the thobes I purchased from this company. The material is lightweight and breathable, perfect for the hot climate here. The embroidery and details are exquisite. I always get compliments when I wear these thobes.",
  },
  {
    name: "Muhammad Munir",
    position: "Data Scientist",
    photo: "assets/1689558783383.jpg",
    text: "I struggled to find thobes that properly fit my tall, slim frame until I found this company. Their custom tailoring options ensure a perfect fit. The thobes drape beautifully and are ideal for both casual and formal wear.",
  },
  {
    name: "Arib Mahboob",
    position: "Data Entry",
    photo: "assets/1689558783383.jpg",
    text: "I appreciate that this thobe company uses natural, breathable fabrics that are ideal for our hot climate. The thobes are lightweight yet durable. I receive many compliments whenever I wear them.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "I wore one of these elegant thobes to my brother's wedding in Dubai last year. I received so many compliments from family who were impressed by the fine details and intricate embroidery.",
  },
  {
    name: "Sazid Omi",
    position: "Graphic Designer",
    photo: "assets/1690416242903",
    text: "As a businessman, I appreciate the elegant and professional look of the thobes from this company. They are perfect for meetings and formal events, allowing me to stay cool and comfortable even in warm offices.",
  },
  {
    name: "Ahnaf Shamim",
    position: "Fullstack Engineer",
    photo:
      "assets/1670559620434.jpg",
    text: "The high level of customer service from this thobe company is unmatched. They provided custom alterations for my unusual measurements at no extra cost, ensuring the perfect tailored fit.",
  },
];

let idx = 1;

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
