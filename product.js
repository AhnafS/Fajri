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
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "I absolutely love the thobes I purchased from this company. The material is lightweight and breathable, perfect for the hot climate here. The embroidery and details are exquisite. I always get compliments when I wear these thobes.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "I struggled to find thobes that properly fit my tall, slim frame until I found this company. Their custom tailoring options ensure a perfect fit. The thobes drape beautifully and are ideal for both casual and formal wear.",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "I appreciate that this thobe company uses natural, breathable fabrics that are ideal for our hot climate. The thobes are lightweight yet durable. I receive many compliments whenever I wear them.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "As a businessman, I appreciate the elegant and professional look of the thobes from this company. They are perfect for meetings and formal events, allowing me to stay cool and comfortable even in warm offices.",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "The high level of customer service from this thobe company is unmatched. They provided custom alterations for my unusual measurements at no extra cost, ensuring the perfect tailored fit.",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "https://randomuser.me/api/portraits/men/97.jpg",
    text: "I struggle to find modest yet stylish thobes for my tall and broad-shouldered frame. This company offers a wide selection of sizes and styles that actually fit me properly.",
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
