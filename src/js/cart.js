import { getLocalStorage } from "./utils.mjs";

// function renderCartContents() {
//   const cartItems = getLocalStorage("so-cart");
//   const htmlItems = cartItems.map((item) => cartItemTemplate(item));
//   document.querySelector(".product-list").innerHTML = htmlItems.join("");
// }
export function renderCartContents() {
  let cartItems = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    cartItems.push(key);
  }

  let htmlItems = "";
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    htmlItems = [...htmlItems, cartItemTemplate(value)];
  }

  if (htmlItems)
    document.querySelector(".product-list").innerHTML = htmlItems?.join("");
  else document.querySelector(".product-list").innerHTML = "";
}

function cartItemTemplate(itemJson) {
  const item = JSON.parse(itemJson);
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  return newItem;
}

renderCartContents();
