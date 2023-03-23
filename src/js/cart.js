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
  <div id="removeItem">
    <p id="removeFromCart${item.Id}"" data-id="removeItem"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    </p>
  </div>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
//&#128465;&#65039; trash icon
  return newItem;
}

function removeElements() {
  if (document.getElementById("removeFromCart880RR"))
    document
      .getElementById("removeFromCart880RR")
      .addEventListener("click", removeItem.bind(this, "880RR"));
  
  if (document.getElementById("removeFromCart985RF"))
  document
    .getElementById("removeFromCart985RF")
    .addEventListener("click", removeItem.bind(this, "985RF"));

  if (document.getElementById("removeFromCart989CG"))
  document
    .getElementById("removeFromCart989CG")
    .addEventListener("click", removeItem.bind(this, "989CG"));

  if (document.getElementById("removeFromCart985PR"))
  document
    .getElementById("removeFromCart985PR")
    .addEventListener("click", removeItem.bind(this, "985PR"));

  if (document.getElementById("removeFromCart880RT"))
  document
    .getElementById("removeFromCart880RT")
    .addEventListener("click", removeItem.bind(this, "880RT"));

  if (document.getElementById("removeFromCart344YJ"))
  document
    .getElementById("removeFromCart344YJ")
    .addEventListener("click", removeItem.bind(this, "344YJ"));
}

function removeItem(idToBeRemoved) {
  localStorage.removeItem(idToBeRemoved);
  updateCart();
}

function updateCart(){
  renderCartContents();
  removeElements();
}

updateCart();
