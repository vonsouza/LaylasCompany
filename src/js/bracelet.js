import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

const dataSource = new ProductData("bracelets");
const element = document.querySelector(".bracelet-list");
const listing = new ProductList("Bracelet", dataSource, element);

listing.init();