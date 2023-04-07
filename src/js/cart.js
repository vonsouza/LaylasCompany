import { setLocalStorage } from "./utils.mjs";

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
  <p class="cart-card__color">${item.DescriptionHtmlSimple}</p>
  <div id="removeItem">
    <p id="removeFromCart${item.Id}"" data-id="removeItem"> 
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
      </svg>
    </p>
  </div>
  <p class="cart-card__quantity"> qty: ${item.qty} 
    <svg id="addQty${item.Id}"" data-id="addQtyItem${item.Id}" class="add-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
  </p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;
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
  if (document.getElementById("removeFromCartA1A1A"))
    document
      .getElementById("removeFromCartA1A1A")
      .addEventListener("click", removeItem.bind(this, "A1A1A"));

  if (document.getElementById("removeFromCartA1B2B"))
    document
      .getElementById("removeFromCartA1B2B")
      .addEventListener("click", removeItem.bind(this, "A1B2B"));

  if (document.getElementById("removeFromCartA1C3C"))
    document
      .getElementById("removeFromCartA1C3C")
      .addEventListener("click", removeItem.bind(this, "A1C3C"));

  if (document.getElementById("removeFromCartA1D4D"))
    document
      .getElementById("removeFromCartA1D4D")
      .addEventListener("click", removeItem.bind(this, "A1D4D"));
  if (document.getElementById("removeFromCartE2A11"))
    document
      .getElementById("removeFromCartE2A11")
      .addEventListener("click", removeItem.bind(this, "E2A11"));

  if (document.getElementById("removeFromCartE2A22"))
    document
      .getElementById("removeFromCartE2A22")
      .addEventListener("click", removeItem.bind(this, "E2A22"));
  if (document.getElementById("removeFromCartI3A3A"))
    document
      .getElementById("removeFromCartI3A3A")
      .addEventListener("click", removeItem.bind(this, "I3A3A"));

  if (document.getElementById("removeFromCartI3A3B"))
    document
      .getElementById("removeFromCartI3A3B")
      .addEventListener("click", removeItem.bind(this, "I3A3B"));

  if (document.getElementById("removeFromCartI3A3C"))
    document
      .getElementById("removeFromCartI3A3C")
      .addEventListener("click", removeItem.bind(this, "I3A3C"));

  if (document.getElementById("removeFromCartI3A3D"))
    document
      .getElementById("removeFromCartI3A3D")
      .addEventListener("click", removeItem.bind(this, "I3A3D"));
}

function removeItem(idToBeRemoved) {
  localStorage.removeItem(idToBeRemoved);
  updateCart();
}

function addElements() {
  if (document.getElementById("addQty880RR"))
    document
      .getElementById("addQty880RR")
      .addEventListener("click", addItem.bind(this, "880RR"));

  if (document.getElementById("addQty985RF"))
    document
      .getElementById("addQty985RF")
      .addEventListener("click", addItem.bind(this, "985RF"));

  if (document.getElementById("addQty989CG"))
    document
      .getElementById("addQty989CG")
      .addEventListener("click", addItem.bind(this, "989CG"));

  if (document.getElementById("addQty985PR"))
    document
      .getElementById("addQty985PR")
      .addEventListener("click", addItem.bind(this, "985PR"));

  if (document.getElementById("addQty880RT"))
    document
      .getElementById("addQty880RT")
      .addEventListener("click", addItem.bind(this, "880RT"));
  if (document.getElementById("addQty344YJ"))
    document
      .getElementById("addQty344YJ")
      .addEventListener("click", addItem.bind(this, "344YJ"));
  if (document.getElementById("addQtyA1A1A"))
    document
      .getElementById("addQtyA1A1A")
      .addEventListener("click", addItem.bind(this, "A1A1A"));
  if (document.getElementById("addQtyA1B2B"))
    document
      .getElementById("addQtyA1B2B")
      .addEventListener("click", addItem.bind(this, "A1B2B"));
  if (document.getElementById("addQtyA1C3C"))
    document
      .getElementById("addQtyA1C3C")
      .addEventListener("click", addItem.bind(this, "A1C3C"));
  if (document.getElementById("addQtyA1D4D"))
    document
      .getElementById("addQtyA1D4D")
      .addEventListener("click", addItem.bind(this, "A1D4D"));
  if (document.getElementById("addQtyE2A11"))
    document
      .getElementById("addQtyE2A11")
      .addEventListener("click", addItem.bind(this, "E2A11"));
  if (document.getElementById("addQtyE2A22"))
    document
      .getElementById("addQtyE2A22")
      .addEventListener("click", addItem.bind(this, "E2A22"));
  if (document.getElementById("addQtyI3A3A"))
    document
      .getElementById("addQtyI3A3A")
      .addEventListener("click", addItem.bind(this, "I3A3A"));
  if (document.getElementById("addQtyI3A3B"))
    document
      .getElementById("addQtyI3A3B")
      .addEventListener("click", addItem.bind(this, "I3A3B"));
  if (document.getElementById("addQtyI3A3C"))
    document
      .getElementById("addQtyI3A3C")
      .addEventListener("click", addItem.bind(this, "I3A3C"));
  if (document.getElementById("addQtyI3A3D"))
    document
      .getElementById("addQtyI3A3D")
      .addEventListener("click", addItem.bind(this, "I3A3D"));
}

function addItem(idToBeAdded) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    if (key == idToBeAdded) {
      const obj = JSON.parse(value);
      let quantity = parseInt(obj.qty);
      quantity += 1;
      obj.qty = quantity.toString();
      setLocalStorage(key, obj);
    }
  }
  updateCart();
}

function displayPrice() {
  let price = getPrice();
  if (price > 0) {
    document.getElementById("cart-footer").style.visibility = "visible";
    document.getElementById("cart-total-value").innerHTML = price;
  } else {
    document.getElementById("cart-footer").style.visibility = "hidden";
  }
}

function getPrice() {
  let priceToDisplay = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const obj = JSON.parse(value);
    let listPrice = parseFloat(obj.ListPrice);
    let quantity = parseInt(obj.qty);

    priceToDisplay = priceToDisplay + listPrice * quantity;
  }
  return CurrencyFormatted(priceToDisplay);
}

function CurrencyFormatted(amount) {
  var i = parseFloat(amount);
  if (isNaN(i)) {
    i = 0.0;
  }
  var minus = "";
  if (i < 0) {
    minus = "-";
  }
  i = Math.abs(i);
  i = parseInt((i + 0.005) * 100);
  i = i / 100;
  var s = new String(i);
  if (s.indexOf(".") < 0) {
    s += ".00";
  }
  if (s.indexOf(".") == s.length - 2) {
    s += "0";
  }
  s = minus + s;
  return s;
}
export function getQtyItens() {
  let qty = 0;
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    const obj = JSON.parse(value);
    let quantity = parseInt(obj.qty);
    qty += quantity;
  }
  return qty;
}

function displayUpdate() {
  let quantity = getQtyItens();
  if (quantity > 0) {
    document.getElementById("lblCartCount").style.visibility = "visible";
    document.getElementById("lblCartCount").innerHTML = quantity;
    document.getElementById("emptyCartMessage").style.visibility = "hidden";
    document.getElementById("confirmation-btn").style.visibility = "visible";
  } else {
    document.getElementById("lblCartCount").style.visibility = "hidden";
    document.getElementById("emptyCartMessage").style.visibility = "visible";
    document.getElementById("confirmation-btn").style.visibility = "hidden";
  }
}

function updateCart() {
  renderCartContents();
  displayPrice();
  displayUpdate();
  addElements();
  removeElements();
}



updateCart();
