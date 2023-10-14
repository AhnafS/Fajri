let nav = document.createElement("nav");
nav.innerHTML = `
      <img
          src="https://cdn.dribbble.com/users/1694627/screenshots/3517133/screen_shot_2017-05-23_at_1.10.41_pm.png"
          alt="Thobe logo"
          id="logo"
        />

      <ul id="menu">
        <li>
          <a href="home.html">Home</a>
        </li>

        <li>
          <a href="product.html">Product</a>
        </li>

        <li>
          <a href="contact.html">Contact</a>
        </li>
      </ul>

      <ul id="menu-icons">
        <li>
          <a href="#"><img src="./assets/people.png" alt="" /></a>
        </li>

        <li>
          <img src="./assets/shopping-bag.png" alt="" class="cart"/>
        </li>
      </ul>`;

let footer = document.createElement("footer");
footer.innerHTML = `
      <p>&copy; 2023 Fajri. All Rights Reserved.</p>
`;

const cartContainer = document.createElement("div");
cartContainer.classList.add("cartContainer", "cart-active");
cartContainer.innerHTML = `
      <h1>Cart</h1>
      <div class="itemsInCart"></div>
      <div class="cartMenu"></div>
`;

document.body.prepend(nav);
document.body.appendChild(footer);
nav.after(cartContainer);

const cartButton = document.querySelector(".cart");
const localCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

for (let i = 0; i < localCartItems.length; i++) {
  const cartItem = document.createElement("div");
  cartItem.classList.add("cartItem");
  cartItem.innerHTML = `
    <img src="${localCartItems[i].image}" alt="" />
    <div class="cartItemDesc">
      <h3>${localCartItems[i].name}</h3>
      <p>$${localCartItems[i].price}</p>
    </div>
    <button class="removeItem" data="${i}">X</button>
  `;
  cartContainer.querySelector(".itemsInCart").appendChild(cartItem);
}

cartButton.addEventListener("click", () => {
  cartContainer.classList.toggle("cart-active");
  console.log(localStorage.getItem("cartItems"));
});
