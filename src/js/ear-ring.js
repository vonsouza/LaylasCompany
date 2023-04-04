import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("best-sellers");
const element = document.querySelector(".product-list");
const listing = new ProductList("Best-Sellers", dataSource, element);

console.log("Estou no ear-ring...");
listing.init();