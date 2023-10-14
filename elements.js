let nav = document.createElement("nav");
nav.innerHTML = `
      <a href="home.html"><h1 style="margin: 1em;">Fajri</h1></a>

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
          <img src="./assets/people.png" alt="" class="login"/>
        </li>

        <li>
          <img src="./assets/shopping-bag.png" alt="" class="cart"/>
        </li>
      </ul>`;

document.body.prepend(nav);

// Footer

let footer = document.createElement("footer");
footer.innerHTML = `
      <p>&copy; 2023 Fajri. All Rights Reserved. Developed by Ahnaf Shamim | Ahnaf Hamim | Sulaiman Zohair</p>
`;
document.body.appendChild(footer);

const cartContainer = document.createElement("div");
cartContainer.classList.add("cartContainer", "cart-active");
cartContainer.innerHTML = `
      <h1>Cart</h1>
      <div class="itemsInCart"></div>
      <div class="cartMenu">
        <button>Buy Now</button>
      </div>
`;

// Cart Items
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

function removeItemFromCart(indexToRemove) {
  if (indexToRemove) {
    const localCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

    const filteredArray = localCartItems.filter(
      (element, index) => index != indexToRemove
    );

    localStorage.setItem("cartItems", JSON.stringify(filteredArray));
    console.log(localStorage.getItem("cartItems"));
  } else {
    console.log("No data found in localStorage");
  }
}

document.querySelectorAll(".removeItem").forEach((button) => {
  button.addEventListener("click", (e) => {
    const index = e.target.getAttribute("data");
    removeItemFromCart(index);
  });
});

cartButton.addEventListener("click", () => {
  cartContainer.classList.toggle("cart-active");
  console.log(localStorage.getItem("cartItems"));
});

// Login

const loginContainer = document.createElement("div");
loginContainer.classList.add("loginContainer", "login-active");
loginContainer.innerHTML = `
       <h1>Please Login</h1>
      <form>
        <div class="form-control">
          <input type="text" required>
          <label>Email</label>
        </div>

        <div class="form-control">
          <input type="password" required>
          <label>Password</label>
        </div>

        <button class="btn">Login</button>

        <p class="text">Don't have an account? <a href="#">Register</a> </p>
      </form>
`;
nav.after(loginContainer);

const loginLabels = document.querySelectorAll(".form-control label");
console.log(loginLabels);
loginLabels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

// Login Toggle
document.querySelector(".login").addEventListener("click", () => {
  loginContainer.classList.toggle("login-active");
});
