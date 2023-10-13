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
          <a href="#"><img src="./assets/shopping-bag.png" alt="" /></a>
        </li>
      </ul>`;

let footer = document.createElement("footer");
footer.innerHTML = `
      <p>&copy; 2023 Fajri. All Rights Reserved.</p>
`;

document.body.prepend(nav);
document.body.appendChild(footer);
